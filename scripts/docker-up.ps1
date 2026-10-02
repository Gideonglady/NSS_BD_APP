# Recover Docker Desktop's confirmed Windows stale AF_UNIX socket failure.
# Only runtime endpoints are preserved by sibling renames; workload data is untouched.
[CmdletBinding()]
param([ValidateRange(15,180)][int]$StartupTimeoutSeconds = 75)
$ErrorActionPreference = 'Stop'
if ($PSVersionTable.PSVersion.Major -lt 7) { throw 'Run this script with PowerShell 7 (pwsh).' }

function Invoke-BoundedDocker {
    param([string[]]$DockerArgs, [int]$TimeoutSeconds = 10)
    $startInfo = [Diagnostics.ProcessStartInfo]::new('docker.exe')
    $startInfo.UseShellExecute = $false
    $startInfo.CreateNoWindow = $true
    $startInfo.RedirectStandardOutput = $true
    $startInfo.RedirectStandardError = $true
    foreach ($argument in $DockerArgs) { [void]$startInfo.ArgumentList.Add($argument) }
    $process = [Diagnostics.Process]::new()
    $process.StartInfo = $startInfo
    [void]$process.Start()
    $stdout = $process.StandardOutput.ReadToEndAsync()
    $stderr = $process.StandardError.ReadToEndAsync()
    if (!$process.WaitForExit($TimeoutSeconds * 1000)) {
        $process.Kill($true)
        $process.WaitForExit()
        $process.Dispose()
        return @{ Code = 124; Out = ''; Error = 'Docker command timed out.' }
    }
    $result = @{ Code = $process.ExitCode; Out = $stdout.GetAwaiter().GetResult(); Error = $stderr.GetAwaiter().GetResult() }
    $process.Dispose()
    return $result
}

function Get-Engine {
    Invoke-BoundedDocker -DockerArgs @('--context','desktop-linux','info','--format','{{.OSType}} {{.ServerVersion}}')
}

$context = Invoke-BoundedDocker -DockerArgs @('context','inspect','desktop-linux','--format','{{.Endpoints.docker.Host}}')
if ($context.Code -ne 0 -or $context.Out.Trim() -ne 'npipe:////./pipe/dockerDesktopLinuxEngine') {
    throw 'Recovery requires the standard local desktop-linux named-pipe context. No remote engine will be modified.'
}
$engine = Get-Engine
if ($engine.Code -eq 0) {
    Write-Output "Docker is ready: $($engine.Out.Trim()). No recovery needed."
    exit 0
}

$desktopPath = 'C:\Program Files\Docker\Docker\Docker Desktop.exe'
if (!(Test-Path -LiteralPath $desktopPath -PathType Leaf)) {
    $desktopPath = Join-Path $env:LOCALAPPDATA 'Programs\DockerDesktop\Docker Desktop.exe'
}
if (!(Test-Path -LiteralPath $desktopPath -PathType Leaf)) { throw 'Docker Desktop executable not found.' }
$backendLog = Join-Path $env:LOCALAPPDATA 'Docker\log\host\com.docker.backend.exe.log'
$runtimeSpecs = @(
    @{ Path = (Join-Path $env:LOCALAPPDATA 'Docker\run'); Names = @('sailor-ingest.sock','dockerInference','dockerEthernetVfkit','userAnalyticsOtlpHttp.sock') },
    @{ Path = (Join-Path $env:LOCALAPPDATA 'docker-secrets-engine'); Names = @('engine.sock') }
)

function Test-KnownCrash {
    if (!(Test-Path -LiteralPath $backendLog -PathType Leaf)) { return $false }
    $recentLog = Get-Content -LiteralPath $backendLog -Tail 180
    return [bool]($recentLog -match 'backend crashed.*starting services:.*(sailor-ingest\.sock|dockerInference|engine\.sock).*The file cannot be accessed by the system')
}

function Repair-Runtime {
    # A log-confirmed fatal crash is required before stopping any Desktop process.
    if (!(Test-KnownCrash)) { throw 'No matching fatal socket error found. Refusing automatic recovery.' }
    if ((Get-Engine).Code -eq 0) { throw 'Engine became available. Refusing to interrupt it.' }
    Write-Output 'Confirmed stale socket startup failure. Stopping failed Desktop instance...'
    if (Get-Process -Name 'Docker Desktop','com.docker.backend' -ErrorAction SilentlyContinue) {
        $stopResult = Invoke-BoundedDocker -DockerArgs @('desktop','stop','--timeout','15') -TimeoutSeconds 20
    }
    if ((Get-Engine).Code -eq 0) { throw 'Engine became available during stop. Recovery aborted.' }
    $dockerProcesses = @(Get-Process -Name 'Docker Desktop','com.docker.backend','docker-desktop' -ErrorAction SilentlyContinue)
    foreach ($dockerProcess in $dockerProcesses) {
        if ($dockerProcess.HasExited) { continue }
        if ($dockerProcess.Path -and ($dockerProcess.Path.StartsWith((Split-Path $desktopPath), [StringComparison]::OrdinalIgnoreCase) -or $dockerProcess.Path.StartsWith('C:\Program Files\Docker\Docker\', [StringComparison]::OrdinalIgnoreCase))) {
            Stop-Process -Id $dockerProcess.Id -Force -ErrorAction SilentlyContinue
        } elseif (!$dockerProcess.HasExited) { throw "Unrecognized Docker process path for PID $($dockerProcess.Id); refusing to stop it." }
    }
    foreach ($dockerProcess in $dockerProcesses) { $dockerProcess.WaitForExit(5000) | Out-Null }
    if (Get-Process -Name 'Docker Desktop','com.docker.backend' -ErrorAction SilentlyContinue) { throw 'Docker has not fully exited.' }

    # Validate both directories before changing either. Never follow links or recurse.
    $existing = @()
    foreach ($spec in $runtimeSpecs) {
        if (!(Test-Path -LiteralPath $spec.Path)) { continue }
        $resolved = (Resolve-Path -LiteralPath $spec.Path).Path
        if ($resolved -ne $spec.Path) { throw "Unexpected resolved runtime path: $resolved" }
        $directory = Get-Item -LiteralPath $resolved -Force
        if (!$directory.PSIsContainer -or ($directory.Attributes -band [IO.FileAttributes]::ReparsePoint)) { throw 'Runtime directory must be an ordinary directory.' }
        foreach ($entry in (Get-ChildItem -LiteralPath $resolved -Force)) {
            $baseName = $entry.Name -replace '\.stale$',''
            if ($entry.PSIsContainer -or $entry.Length -ne 0 -or $baseName -notin $spec.Names -or !($entry.Attributes -band [IO.FileAttributes]::ReparsePoint)) {
                throw "Unexpected runtime content $($entry.Name). Nothing will be removed."
            }
        }
        $existing += $directory
    }
    if ($existing.Count -eq 0) { throw 'No runtime directories found; recovery cannot address this failure.' }
    $stamp = (Get-Date -Format 'yyyyMMdd-HHmmss') + '-' + [Guid]::NewGuid().ToString('N').Substring(0,6)
    foreach ($directory in $existing) {
        $backupName = $directory.Name + '.quarantine-' + $stamp
        Rename-Item -LiteralPath $directory.FullName -NewName $backupName
        Write-Output "Preserved socket directory: $(Join-Path $directory.Parent.FullName $backupName)"
    }
}

$recovered = $false
if (Test-KnownCrash) { Repair-Runtime; $recovered = $true }
Start-Process -FilePath $desktopPath -WindowStyle Hidden
$startedAt = Get-Date
while (((Get-Date) - $startedAt).TotalSeconds -lt $StartupTimeoutSeconds) {
    Start-Sleep -Seconds 2
    $engine = Get-Engine
    if ($engine.Code -eq 0) {
        if (!$engine.Out.StartsWith('linux ')) { throw 'Docker is not using the Linux engine.' }
        Write-Output "Docker is ready: $($engine.Out.Trim())."
        if ($recovered) { Write-Output 'Runtime recovery succeeded. This is a workaround; the Docker/Windows recurrence remains unresolved.' }
        exit 0
    }
    if (!$recovered -and (Test-KnownCrash)) {
        Repair-Runtime
        $recovered = $true
        Start-Process -FilePath $desktopPath -WindowStyle Hidden
        $startedAt = Get-Date
    }
}
throw 'Docker did not become ready. Recovery was attempted at most once; inspect the latest Desktop log.'

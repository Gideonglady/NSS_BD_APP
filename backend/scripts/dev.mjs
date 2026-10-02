import { spawn, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const backendDirectory = fileURLToPath(new URL('../', import.meta.url));
const windows = process.platform === 'win32';
const children = new Set();
let stopping = false;
let shutdownTimer;

function terminate(child, force = false) {
  if (!child.pid) return;
  if (windows) {
    // Clean up descendants too, including any future loader subprocesses.
    spawnSync('taskkill', ['/PID', String(child.pid), '/T', '/F'], {
      stdio: 'ignore', windowsHide: true,
    });
  } else {
    try { process.kill(-child.pid, force ? 'SIGKILL' : 'SIGTERM'); }
    catch (error) { if (error.code !== 'ESRCH') console.error('Could not stop development process tree.'); }
  }
}

function stop(exitCode = 0) {
  if (stopping) return;
  stopping = true;
  process.exitCode = exitCode;
  for (const child of children) terminate(child);
  if (children.size > 0) {
    shutdownTimer = setTimeout(() => {
      for (const child of children) terminate(child, true);
      process.exitCode = 1;
    }, 12_000);
    shutdownTimer.unref();
  }
}

// Fail clearly before launching either process when installation is missing.
try { import.meta.resolve('tsx'); }
catch {
  console.error('Backend dependencies are missing. Run the pinned pnpm install from the repository root.');
  process.exit(1);
}

for (const entry of ['server', 'worker']) {
  const child = spawn(process.execPath, ['--import', 'tsx', `src/${entry}.ts`], {
    cwd: backendDirectory,
    stdio: 'inherit',
    detached: !windows,
    windowsHide: true,
  });
  children.add(child);
  child.once('error', () => {
    console.error(`Could not start the ${entry} development process.`);
    stop(1);
  });
  child.once('close', (code, signal) => {
    children.delete(child);
    if (!stopping) {
      console.error(`${entry} development process exited (${code ?? signal ?? 'unknown'}).`);
      stop(code && code > 0 ? code : 1);
    }
    if (children.size === 0) clearTimeout(shutdownTimer);
  });
}

process.once('SIGINT', () => stop());
process.once('SIGTERM', () => stop());

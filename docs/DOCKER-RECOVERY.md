# Docker Desktop startup recovery

## Fresh verification — 2026-10-02

- Initial engine probe failed: the `dockerDesktopLinuxEngine` pipe was absent.
- Starting Desktop reproduced the same fatal `sailor-ingest.sock` rename error
  shown in the owner's screenshot. The guarded recovery preserved both runtime
  directories and restored Linux engine 29.7.2 on Desktop 4.90.0.238679.
- A disposable `postgres:17-alpine` container with `--network none` and tmpfs
  storage passed readiness, CREATE TABLE, INSERT and SELECT (one verified row,
  PostgreSQL 17.11). It was stopped and automatically removed; existing volumes
  were not modified. This is engine/database smoke evidence, not PostGIS or
  application migration acceptance.
- A normal `docker desktop restart --timeout 45` reproduced the fatal rename
  error and timed out. Guarded recovery restored the engine again. One recovery
  attempt safely refused an unavailable process path during shutdown; retrying
  after the restart command finished succeeded without relaxing its guards.
- Web research found matching open reports [#676](https://github.com/docker/desktop-feedback/issues/676)
  and [#554](https://github.com/docker/desktop-feedback/issues/554).
  [Release notes](https://docs.docker.com/desktop/release-notes/) for 4.93.0
  do not explicitly confirm a correction for this exact socket-rename failure.
  The earlier stuck-socket fix does not establish a fix on this host: 4.90.0
  still fails the normal restart test. The underlying cause is unconfirmed.
- Docker can run through the workaround; ordinary restart reliability remains
  unresolved. No upgrade, factory reset, WSL unregister, permission rewrite,
  diagnostic upload or persistent-data deletion was performed. Implementation
  is paused at the owner's instruction pending Docker resolution.

Use `pwsh -NoProfile -File scripts/docker-up.ps1` from this checkout for the
tested recovery. A controlled upgrade with a verified backup and repeat restart
tests is a possible next investigation, not a proven solution. If it still
fails, Docker's [support procedure](https://docs.docker.com/desktop/troubleshoot-and-support/troubleshoot/)
is the supported escalation path; uploading diagnostics requires separate owner
authorization because they contain host information.

## Historical recovery: engine restored on 2026-09-29; restart defect unresolved

Verified on 2026-09-29, Windows 11 25H2 build 26200.9457,
Docker Desktop 4.90.0.238679, Linux engine 29.7.2.

Docker's backend aborts before starting the Linux engine because Windows returns
error 1920 when Docker attempts to rename `sailor-ingest.sock` to `.stale`.
Both `Docker/run` and `docker-secrets-engine` contain inaccessible runtime socket
objects. Their parent directories remain accessible.

The exact underlying cause of the Docker/Windows socket lifecycle failure has
not been established. ReparsePoint attributes alone do not establish corruption.
This is a Docker host startup problem; application SQL does not run at this point.

## Verified recovery

From the project directory, in PowerShell 7:

```powershell
pwsh -NoProfile -File scripts/docker-up.ps1
```

Or use `pnpm docker:up`. This command:

1. Verifies the `desktop-linux` context targets the local Docker named pipe.
2. Returns immediately when the engine is healthy.
3. Requires a matching fatal socket error in the recent backend log before repair.
4. Stops the failed Desktop instance and waits for process exit.
5. Validates the exact two runtime directories and their socket-only contents.
6. Renames both directories to unique `.quarantine-*` siblings, preserving them.
7. Launches Desktop and checks engine readiness with bounded waits.
8. Attempts recovery at most once and fails clearly for other errors.

The script does not reset Docker, unregister WSL, delete/prune volumes or images,
change permissions, modify settings, or touch the Docker data disk. It does not
install a background task or change Windows startup behavior. Leave quarantined
directories in place; do not use recursive deletion to clean inaccessible sockets.

## Evidence

- Initial paired runtime-directory isolation restored the Linux engine.
- A normal `docker desktop restart --timeout 45` reproduced the fatal socket
  failure using newly created sockets. Therefore a simple restart or one-time
  directory rename is **not a permanent fix**.
- The recovery script restored the engine after that failure.
- A disposable `postgres:17-alpine` container (PostgreSQL 17.11) started with no
  network and tmpfs database storage. A CREATE TABLE, INSERT, and SELECT succeeded
  with one verified row. The probe container was stopped and automatically removed.
- Running the recovery script while Docker was healthy returned success without
  restarting it or moving directories.
- Existing Docker volumes remained visible. Their contents were not inspected or
  modified, and application backup restoration has not been tested.

## Remaining work

Opening/restarting Docker directly can still reproduce the host defect. Use the
recovery command after this specific error. A permanent fix must survive normal
stop/start and Windows restart tests without directory isolation.

Docker 4.93.0 release notes were checked; they do not explicitly establish a fix
for this reproduced failure. No Docker or Windows upgrade was performed in this
repair. Related reports describe recurrence even after upgrading to 4.91.0.
An upgrade must be tested rather than assumed to solve it.

- [Matching Docker issue](https://github.com/docker/desktop-feedback/issues/676)
- [Related socket lifecycle issue](https://github.com/docker/desktop-feedback/issues/625)
- [Docker release notes](https://docs.docker.com/desktop/release-notes/)

The application rebuild remains in progress. A working Docker engine alone does
not validate its database migrations, API, clients, or production readiness.

## 2026-10-01 stack alignment

The target backend now uses Docker Compose PostgreSQL 17/PostGIS with Prisma,
Express and a Node worker; mobile uses Flutter. See [plan.md](plan.md) and
[techspec.md](techspec.md). The host recovery procedure above still applies,
but its historical smoke test did not validate application migrations.
Existing Supabase configuration/migrations are unapplied previous-stack drafts
to port, and the Compose/Prisma runner is not implemented yet. `F002` must verify
the new startup path before `F003` migration acceptance.

## Implementation entry gate — 2026-10-02

The latest read-only `docker info` probe could not connect to the
`dockerDesktopLinuxEngine` named pipe. Historical restoration above does not mean
Docker is currently ready. No recovery or restart was attempted during the
consistency audit. Record a fresh engine/PostGIS readiness result under F002;
then verify real Compose startup/stop before F003 migration work. The existing
recovery script remains restricted to its recognized socket error; a missing
pipe alone is not proof that the quarantine repair applies.

F002 must replace previous Supabase/Hono/env/workspace declarations, pin pnpm
10.32.1 and the Flutter SDK, implement real runner/secret checks and capture a
reviewed feature-only baseline. Do not apply the Supabase drafts or use declared
commands as acceptance evidence. Current product contracts and prerequisites are
in plan.md, techspec.md and featurelist.json; this file documents host recovery.

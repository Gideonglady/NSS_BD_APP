# Local development (F002 scaffold)

This scaffold contains no donor workflow, identity system or durable jobs yet.
API readiness returns 503 until the F003 database foundation exists.

Prerequisites: Node 24 (recorded in `.node-version`), Corepack/pnpm 10.32.1,
Flutter 3.24.5 with Dart 3.5.4, Docker Linux engine and Compose v2.
Android builds need JDK 17; iOS builds need macOS/Xcode. Native/device tests
are separate gates. The pnpm fallback provided by a host may have a different
version; use Corepack so `packageManager` selects the project pin.

```powershell
# Optional workspace-local Corepack cache (avoids modifying host configuration).
$env:COREPACK_HOME = Join-Path $PWD '.cache/corepack'
corepack pnpm --version
corepack pnpm install --frozen-lockfile
Copy-Item .env.example .env
Set-Location mobile
flutter pub get --enforce-lockfile
Set-Location ..
corepack pnpm backend:up
corepack pnpm backend:dev
# In another terminal:
corepack pnpm dev:web
# In another terminal, with a configured emulator/device:
corepack pnpm dev:mobile -- -d chrome
```

Web binds 127.0.0.1:3000, API 127.0.0.1:4000, PostgreSQL 127.0.0.1:54329.
The default API URL is for browser development; Android emulators use
10.0.2.2 and physical devices require explicit local-network configuration.
Development screens identify themselves as incomplete, in English and Tamil.

```powershell
corepack pnpm check
corepack pnpm --filter @nss/backend build
corepack pnpm --filter @nss/backend exec prisma --version
corepack pnpm backend:down
```

`backend:down` removes the project containers/network and preserves its data volume.
`backend:up` waits for database health. Both reject remote Docker context targets
and environment overrides. No automatic host repair occurs; if the documented
socket failure returns, see [DOCKER-RECOVERY.md](DOCKER-RECOVERY.md).

`db:reset:local` first requires ENVIRONMENT=local and the exact Compose database
URL without overrides, then refuses to act until F003 schema/seed exist.
`db:types` and `test:backend` fail clearly while their model/client/integration
prerequisites are absent. `pnpm test` exercises real scaffold HTTP endpoints and
toolchain guards; it is not workflow or database permission evidence.
FCM is disabled locally; enabling it without credentials fails with field names
only. The provider adapter remains F024 work. There are no Supabase runtime
commands or TypeScript mobile workspaces.

Before F002 completion, export only explicitly reviewed scaffold paths into a
clean checkout, install both lockfiles, repeat these checks/start-stop probes and
record results. The mixed working tree contains unrelated old-app deletions.
Do not blanket-stage them or run/reset an old schema.

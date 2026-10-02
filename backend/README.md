# API and worker scaffold

Use Node 24 and the repository's pinned pnpm version. Install from the repository
root, then run `pnpm --filter @nss/backend dev` and
`pnpm --filter @nss/backend dev:worker` in separate terminals (or the root
`pnpm backend:dev` supervisor).

`pnpm --filter @nss/backend dev:all` supervises both processes and stops
the sibling if either exits. Restart this supervisor after editing code, or use
the separate watch commands above. POSIX shutdown signals drain the API; Windows uses
`taskkill /T /F` to clean up complete process trees, so Windows
development shutdown is forced. The standalone built API still handles graceful
SIGINT/SIGTERM when the hosting runtime supports those signals.

The API binds to `127.0.0.1:4000` by default; configure `API_HOST` and `API_PORT`
in the process environment. Invalid startup fields fail before binding. Node
does not automatically load `.env`; the root runner owns local environment loading.

`GET /health/live` proves the HTTP process responds. `GET /health/ready` returns
503 with `database: not_implemented` until F003 adds dependency checks. The worker
is deliberately an idle scaffold and logs that durable jobs are unimplemented.
It must not be treated as a working notification or coordination worker.

Run `pnpm --filter @nss/backend typecheck`, `test`, and `build`. After building,
`pnpm --filter @nss/backend start` and `start:worker` run the emitted JavaScript.
Both processes handle SIGINT/SIGTERM; the API drains HTTP connections with a
ten-second shutdown bound.

Prisma schema/migrations, custom identity, durable outbox and organization access
belong to F003. Donor/request workflow data and constraints belong to F004.
This scaffold does not connect to a database or collect any donor health data.

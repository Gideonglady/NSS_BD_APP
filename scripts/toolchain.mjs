import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
export const root = fileURLToPath(new URL('../', import.meta.url));
export function run(command, args, options = {}) {
  const result = spawnSync(command, args, { cwd: root, stdio: 'inherit', ...options });
  if (result.error) throw new Error(`Cannot run ${command}: ${result.error.code}. Install the documented prerequisite.`);
  if (result.status !== 0) throw new Error(`${command} failed (exit ${result.status ?? 'signal'}).`);
}
export function pnpm(args) {
  if (process.platform === 'win32') run('cmd.exe', ['/d', '/c', 'corepack', 'pnpm', ...args]);
  else run('corepack', ['pnpm', ...args]);
}
export function requireFoundation() {
  for (const path of ['backend/prisma/schema.prisma', 'backend/prisma/seed.ts']) {
    if (!existsSync(new URL(`../${path}`, import.meta.url))) throw new Error(`F003 is not implemented: missing ${path}. No database changes performed.`);
  }
}
export function validateLocalDatabase(value, environment) {
  if (environment !== 'local') throw new Error('Database reset requires ENVIRONMENT=local.');
  let url;
  try { url = new URL(value); } catch { throw new Error('DATABASE_URL must be a valid local PostgreSQL URL.'); }
  if (!['postgres:', 'postgresql:'].includes(url.protocol) || url.hostname !== '127.0.0.1' || url.port !== '54329' || url.pathname !== '/nss_local' || url.username !== 'nss_local' || url.search || url.hash) {
    throw new Error('Reset allowed only for the Compose nss_local database on 127.0.0.1:54329 without URL overrides.');
  }
}
export function validateProviders(env) {
  if (env.FCM_ENABLED && !['true', 'false'].includes(env.FCM_ENABLED)) throw new Error('FCM_ENABLED must be true or false.');
  if (env.FCM_ENABLED === 'true') {
    const missing = ['FCM_PROJECT_ID', 'FCM_CLIENT_EMAIL', 'FCM_PRIVATE_KEY'].filter(key => !env[key]?.trim());
    if (missing.length) throw new Error(`Missing FCM configuration: ${missing.join(', ')}.`);
    throw new Error('FCM adapter is not implemented until F024; disable FCM for scaffold use.');
  }
}

import { existsSync } from 'node:fs';
import { pnpm, run, requireFoundation, validateLocalDatabase, validateProviders } from './toolchain.mjs';
try {
  if (existsSync('.env')) process.loadEnvFile('.env');
  if (!process.version.startsWith('v24.')) throw new Error('Node 24 is required.');
  const action = process.argv[2];
  const compose = ['compose', '-f', 'compose.yaml'];
  if (['up', 'down'].includes(action)) {
    const context = await import('node:child_process').then(({ spawnSync }) => spawnSync('docker', ['context', 'inspect', '--format', '{{.Endpoints.docker.Host}}'], { encoding: 'utf8' }));
    const host = context.stdout?.trim();
    if (context.status !== 0 || !host || !/^(npipe:\/\/\/\/\.\/pipe\/|unix:\/\/\/)/.test(host) || process.env.DOCKER_HOST || process.env.DOCKER_CONTEXT) throw new Error('Compose requires a local named-pipe/Unix-socket Docker context without environment overrides.');
    run('docker', [...compose, 'config', '--quiet']);
    run('docker', [...compose, ...(action === 'up' ? ['up', '-d', '--wait', '--wait-timeout', '90'] : ['down'])]);
  } else if (action === 'serve') {
    validateProviders(process.env);
    pnpm(['--filter', '@nss/backend', 'dev:all']);
  } else if (action === 'reset') {
    validateLocalDatabase(process.env.DATABASE_URL, process.env.ENVIRONMENT);
    requireFoundation();
    pnpm(['--filter', '@nss/backend', 'exec', 'prisma', 'migrate', 'reset', '--force']);
  } else if (action === 'types') {
    requireFoundation();
    throw new Error('F010 OpenAPI TypeScript/Dart generation is not implemented; no parity claimed.');
  } else if (action === 'test') {
    requireFoundation();
    throw new Error('Database/API permission integration suite is not implemented. Use pnpm test for scaffold tests.');
  } else throw new Error('Expected up, down, serve, reset, types or test.');
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}

import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { run } from './toolchain.mjs';
try {
  const command = process.platform === 'win32' ? 'cmd.exe' : 'flutter';
  const prefix = process.platform === 'win32' ? ['/d', '/c', 'flutter'] : [];
  const version = spawnSync(command, [...prefix, '--version', '--machine'], { encoding: 'utf8' });
  if (version.error || version.status !== 0) throw new Error('Flutter is unavailable; install the pinned SDK documented in mobile/.flutter-version.');
  const pinned = readFileSync(new URL('../mobile/.flutter-version', import.meta.url), 'utf8').trim();
  const actual = JSON.parse(version.stdout);
  const sdk = JSON.parse(readFileSync(new URL('../mobile/sdk-versions.json', import.meta.url), 'utf8'));
  if (actual.frameworkVersion !== pinned || !actual.dartSdkVersion.startsWith(sdk.dart)) throw new Error(`Flutter ${pinned} with Dart ${sdk.dart} is required.`);
  const action = process.argv[2];
  if (!['run', 'test', 'analyze'].includes(action)) throw new Error('Expected run, test or analyze.');
  run(command, [...prefix, action, ...(action === 'run' ? ['--dart-define=API_BASE_URL=http://127.0.0.1:4000'] : []), ...process.argv.slice(3)], { cwd: fileURLToPath(new URL('../mobile/', import.meta.url)) });
} catch (error) { console.error(error.message); process.exitCode = 1; }

import test from 'node:test';
import assert from 'node:assert/strict';
import { validateLocalDatabase, validateProviders, requireFoundation } from '../../scripts/toolchain.mjs';
test('reset only targets the fixed local Compose database', () => {
  const local = 'postgresql://nss_local:synthetic_local_only@127.0.0.1:54329/nss_local';
  assert.doesNotThrow(() => validateLocalDatabase(local, 'local'));
  for (const url of [local.replace('127.0.0.1', 'remote.example'), local.replace('54329', '5432'), local.replace('/nss_local', '/production'), local + '?host=remote.example', local.replace('nss_local:', 'postgres:'), 'not-a-url']) assert.throws(() => validateLocalDatabase(url, 'local'));
  assert.throws(() => validateLocalDatabase(local, 'production'));
});
test('enabled provider fails without leaking credential values', () => {
  assert.doesNotThrow(() => validateProviders({ FCM_ENABLED: 'false' }));
  assert.throws(() => validateProviders({ FCM_ENABLED: 'yes' }), /true or false/);
  assert.throws(() => validateProviders({ FCM_ENABLED: 'true' }), /Missing FCM configuration/);
  assert.throws(() => validateProviders({ FCM_ENABLED: 'true', FCM_PROJECT_ID: 'example', FCM_CLIENT_EMAIL: 'example', FCM_PRIVATE_KEY: 'secret' }), /not implemented/);
});
test('unimplemented foundation cannot claim reset or integration acceptance', () => {
  assert.throws(requireFoundation, /F003 is not implemented/);
});

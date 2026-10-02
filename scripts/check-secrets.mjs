import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
const excluded = new Set(['.git', '.cache', 'node_modules', '.next', '.dart_tool', 'build', 'dist', 'legacy', 'supabase']);
const roots = ['backend', 'admin', 'mobile', 'scripts', 'tests', 'packages'];
let failures = 0;
function scan(path) {
  for (const item of readdirSync(path, { withFileTypes: true })) {
    if (excluded.has(item.name) || item.isSymbolicLink()) continue;
    const full = join(path, item.name);
    if (item.isDirectory()) scan(full);
    else if (/\.(ts|tsx|js|mjs|json|yaml|yml|dart|env|example|md)$/.test(item.name)) {
      const text = readFileSync(full, 'utf8');
      if (/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/.test(text) || /AIza[0-9A-Za-z_-]{35}/.test(text) || /\bgh[pousr]_[A-Za-z0-9]{30,}/.test(text)) { console.error(`Credential pattern found: ${full} (value redacted)`); failures++; }
    }
  }
}
for (const path of roots) { try { scan(path); } catch (error) { if (error.code !== 'ENOENT') throw error; } }
if (failures) process.exitCode = 1;
else console.log('Active scaffold credential-pattern scan passed. Legacy/history revocation remains a separate gate.');

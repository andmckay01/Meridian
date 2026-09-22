import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { basePath, siteUrl } from '../site.config.mjs';

const root = new URL('../', import.meta.url);
const output = new URL('dist/', root);
const destination = new URL(`dist${basePath}/`, root);

await rm(output, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
await cp(new URL('out/', root), destination, { recursive: true });
await writeFile(new URL('.next/archive.json', root), JSON.stringify({ basePath, siteUrl }, null, 2));

console.log(`Archive ready for ${siteUrl}`);
console.log(`Copy the contents of ${fileURLToPath(output)} into your personal site's static/public directory.`);

import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const { basePath, siteUrl } = JSON.parse(await readFile(new URL('../.next/archive.json', import.meta.url), 'utf8'));
const archive = resolve(root, `.${basePath}`);
const html = await readFile(resolve(archive, 'index.html'), 'utf8');
assert.ok(html.includes(`<link rel="canonical" href="${siteUrl}"`), 'Canonical URL must point to the archive.');

async function filesWithin(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(entry => {
    const path = resolve(directory, entry.name);
    return entry.isDirectory() ? filesWithin(path) : [path];
  }));
  return files.flat();
}

let checked = 0;
async function checkAsset(value, documentUrl) {
  if (!value || value.startsWith('data:') || value.startsWith('#')) return;
  const url = new URL(value.replaceAll('&amp;', '&'), documentUrl);
  assert.equal(url.origin, new URL(siteUrl).origin, `Archive asset depends on an external service: ${url}`);
  assert.ok(url.pathname.startsWith(`${basePath}/`), `Asset escapes the archive path: ${url.pathname}`);
  let file = resolve(root, `.${decodeURIComponent(url.pathname)}`);
  if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html');
  assert.ok((await stat(file)).isFile(), `Missing exported asset: ${url.pathname}`);
  checked++;
}

for (const file of await filesWithin(archive)) {
  if (!/\.(html|css|js)$/.test(file)) continue;
  const content = await readFile(file, 'utf8');
  assert.ok(!/timeverif\.meridianvc\.com|googletagmanager\.com|google-analytics\.com|google\.com\/recaptcha/.test(content),
    `Live service remains in ${relative(root, file)}`);
  const documentUrl = new URL(relative(root, file), new URL(siteUrl).origin + '/');
  if (file.endsWith('.html')) {
    for (const tag of content.matchAll(/<(?:img|script|link|source)\b[^>]*>/g)) {
      for (const attribute of tag[0].matchAll(/\b(?:src|href)="([^"]+)"/g)) {
        await checkAsset(attribute[1], documentUrl);
      }
    }
    for (const tag of content.matchAll(/<meta\b[^>]*(?:property="og:image"|name="twitter:image")[^>]*>/g)) {
      const value = /content="([^"]+)"/.exec(tag[0]);
      assert.ok(value, 'Social image metadata must have a URL.');
      await checkAsset(value[1], documentUrl);
    }
  } else if (file.endsWith('.css')) {
    for (const match of content.matchAll(/url\(["']?([^\s"')]+)["']?\)/g)) {
      await checkAsset(match[1], documentUrl);
    }
  }
}

// Client-only sections, both fund selections, and modals load more assets after
// hydration. Check their literal public paths even when absent from initial HTML.
const sourceRoot = fileURLToPath(new URL('../', import.meta.url));
const publicPaths = new Set();
for (const directory of ['app', 'components', 'mockDatabase']) {
  for (const file of await filesWithin(resolve(sourceRoot, directory))) {
    if (!/\.tsx?$/.test(file)) continue;
    const source = await readFile(file, 'utf8');
    for (const match of source.matchAll(/["']((?:\/|\.\/)?[^\s"']+\.(?:svg|png|jpe?g|webp|glb))["']/g)) {
      publicPaths.add(match[1].replace(/^(?:\.\/|\/)+/, ''));
    }
  }
}
for (const path of publicPaths) {
  await checkAsset(`${basePath}/${path}`, siteUrl);
}
console.log(`Archive check passed: ${checked} asset references resolve inside ${basePath || '/'}, with no retired services.`);

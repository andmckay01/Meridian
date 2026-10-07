import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const { basePath } = JSON.parse(await readFile(new URL('../.next/archive.json', import.meta.url), 'utf8'));
const port = Number(process.env.PORT ?? 3000);
const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.json': 'application/json',
  '.txt': 'text/plain; charset=utf-8', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.otf': 'font/otf',
  '.glb': 'model/gltf-binary',
};

createServer(async (request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end();
    return;
  }
  try {
    const url = new URL(request.url ?? '/', 'http://localhost');
    const pathname = decodeURIComponent(url.pathname);
    const path = resolve(root, `.${pathname}`);
    if (path !== resolve(root) && !path.startsWith(`${resolve(root)}${sep}`)) {
      response.writeHead(403).end();
      return;
    }
    if (pathname === '/' && basePath) {
      response.writeHead(302, { Location: `${basePath}/` }).end();
      return;
    }
    const info = await stat(path);
    if (info.isDirectory() && !pathname.endsWith('/')) {
      response.writeHead(308, { Location: `${url.pathname}/${url.search}` }).end();
      return;
    }
    const file = info.isDirectory() ? resolve(path, 'index.html') : path;
    const data = await readFile(file);
    response.writeHead(200, {
      'Content-Type': types[extname(file)] ?? 'application/octet-stream',
      'Content-Length': data.length,
      'Cache-Control': 'no-store',
    });
    response.end(request.method === 'HEAD' ? undefined : data);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    const fallback = await readFile(resolve(root, `.${basePath}/404.html`)).catch(() => 'Not found');
    response.end(request.method === 'HEAD' ? undefined : fallback);
  }
}).listen(port, '127.0.0.1', () => {
  console.log(`Preview: http://127.0.0.1:${port}${basePath}/`);
});

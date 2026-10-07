// These public values are baked into the archive. Rebuild after changing them.
export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '/meridian').replace(/\/+$/, '');

if (basePath && !/^\/(?:[a-zA-Z0-9_-]+\/)*[a-zA-Z0-9_-]+$/.test(basePath)) {
  throw new Error('NEXT_PUBLIC_BASE_PATH must be empty or a path such as /meridian or /projects/meridian.');
}

export const siteOrigin = new URL(process.env.NEXT_PUBLIC_SITE_ORIGIN ?? 'https://mckayanderson.net').origin;
export const siteUrl = `${siteOrigin}${basePath}/`;

/** @param {string} path A path within public/. */
export function assetPath(path) {
  return `${basePath}/${path.replace(/^(?:\.\/|\/)+/, '')}`;
}

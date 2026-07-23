// Prefixes a root-absolute public path with the deploy basePath (e.g. /meAadhil on
// GitHub Pages, "" locally). Use for plain <a href>/<img src> to files in public/.
// next/image and next/link already apply basePath automatically, so they don't need this.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const withBasePath = (path) => `${basePath}${path}`;

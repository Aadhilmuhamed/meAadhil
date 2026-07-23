/** @type {import('next').NextConfig} */

// GitHub Pages serves this project repo under a subpath (https://<user>.github.io/meAadhil/).
// In production we must set basePath/assetPrefix so all assets resolve under /meAadhil,
// and use a static export (output: "export") with unoptimized images (no image server on Pages).
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/meAadhil" : "";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  // Exposed to the client so plain <a href> / <img src> can be prefixed via lib/basePath.js
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;

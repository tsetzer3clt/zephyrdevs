import type { NextConfig } from "next";

// Optional base path for GitHub Pages repository sites.
// Set the env var `NEXT_PUBLIC_BASE_PATH` to your repo name (e.g. "zephyrdevs")
// when exporting for a repo site at: https://<user>.github.io/<repo>/
const basePathEnv = process.env.NEXT_PUBLIC_BASE_PATH || "";
const computedBasePath = basePathEnv ? `/${basePathEnv}` : undefined;

// Allow choosing the deploy target with an env var. If you set
// `DEPLOY_TARGET=gh-pages` the build will produce a fully static export
// (`output: 'export'`) suitable for GitHub Pages. When building on Vercel
// (or locally for server-deployed sites) leave `DEPLOY_TARGET` unset so Next
// runs in its default server-capable mode.
const isGhPages = process.env.DEPLOY_TARGET === "gh-pages";

const nextConfig: NextConfig = {
  // Only enable static 'export' output when targeting GitHub Pages
  ...(isGhPages ? { output: "export" } : {}),
  // If the site will be served under a repo path (not a user/org root site),
  // set `basePath` and `assetPrefix` to ensure assets and links use the repo path.
  basePath: computedBasePath,
  assetPrefix: computedBasePath ? `${computedBasePath}/` : undefined,
  // Disable the built-in image optimizer when exporting static files (it
  // requires a server). Leave it enabled when not exporting.
  images: isGhPages
    ? {
        unoptimized: true,
      }
    : undefined,
};

export default nextConfig;

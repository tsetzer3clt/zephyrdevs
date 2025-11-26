import type { NextConfig } from "next";

// Optional base path for GitHub Pages repository sites.
// Set the env var `NEXT_PUBLIC_BASE_PATH` to your repo name (e.g. "zephyrdevs")
// when exporting for a repo site at: https://<user>.github.io/<repo>/
const basePathEnv = process.env.NEXT_PUBLIC_BASE_PATH || "";
const computedBasePath = basePathEnv ? `/${basePathEnv}` : undefined;

const nextConfig: NextConfig = {
  // Generate a fully static export suitable for GitHub Pages
  output: "export",
  // If the site will be served under a repo path (not a user/org root site),
  // set `basePath` and `assetPrefix` to ensure assets and links use the repo path.
  basePath: computedBasePath,
  assetPrefix: computedBasePath ? `${computedBasePath}/` : undefined,
  // Disable the built-in image optimizer which requires a server
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export → upload `out/` to Hostinger shared hosting (no Node).
  output: "export",
  // Each route becomes a folder + index.html, served cleanly by Apache.
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  images: {
    // No image optimizer on static hosting — serve originals as-is.
    unoptimized: true,
  },
};

export default nextConfig;

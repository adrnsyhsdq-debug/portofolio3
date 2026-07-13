/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

// Static export so the site can be served directly from GitHub Pages.
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? '/portofolio3' : '',
  assetPrefix: isProd ? '/portofolio3/' : '',
  trailingSlash: true,
}

export default nextConfig

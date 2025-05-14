/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/DolontaevaanalysisWebCite' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/DolontaevaanalysisWebCite/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig 
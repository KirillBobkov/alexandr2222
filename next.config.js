/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    distDir: 'docs',
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|avi|mov)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name].[hash][ext]'
        }
      });
      return config;
    },
  }
   
  module.exports = nextConfig
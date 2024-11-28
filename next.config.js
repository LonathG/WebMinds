/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          process: require.resolve('process/browser'),
        };
      }
      return config;
    },
  };
  
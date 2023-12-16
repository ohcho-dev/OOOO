/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.worker\.js$/,
        loader: "worker-loader",
        options: {
          name: "static/[hash].worker.js",
          publicPath: "/.next/",
        },
      });
    }

    return config;
  },
};

module.exports = nextConfig;

// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(sass|scss|css)$/, // Match `.sass`, `.scss`, `.css` files
      use: ["style-loader", "css-loader", "postcss-loader"], // Use the appropriate loaders
    });

    return config;
  },
};

export default nextConfig;

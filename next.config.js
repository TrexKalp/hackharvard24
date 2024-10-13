// next.config.js
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      include: /node_modules/, // Ensure it's for node_modules
      use: ["style-loader", "css-loader"],
    });
    return config;
  },
};

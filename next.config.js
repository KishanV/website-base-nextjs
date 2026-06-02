const envConfig = require("dotenv").config({
  path: process.env.NODE_ENV === "app" ? `app.env` : `.env`,
});

module.exports = {
  assetPrefix: envConfig.parsed.CDN_URL ? envConfig.parsed.CDN_URL : undefined,
  basePath: envConfig.parsed.BASE_PATH,
  output: "export",
  trailingSlash: true,
  compress: true,
  pageExtensions: ["tsx"],
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  compiler: {
    styledComponents: {
      displayName: true,
      fileName: true,
    },
  },
  env: {
    ...envConfig.parsed,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

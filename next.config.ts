const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  // experimental: {
  //   turbo: true,
  // },

  typescript: {
    ignoreBuildErrors: true,
  },

  webpack: (config: any) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      type: "asset/resource",
    });
    return config;
  },
};

export default nextConfig;

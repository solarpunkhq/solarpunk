/** @type {import('next').NextConfig} */
module.exports = {
  poweredByHeader: false,
  experimental: {
    typedRoutes: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/animations/:all*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/videos/:all*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:all*',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, must-revalidate',
          },
        ],
      },
    ];
  },
  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

    config.module.rules.push(
      {
        test: /(?<!inline)\.svg$/i,
        use: [
          {
            loader: require.resolve('url-loader'),
            options: {
              limit: 512,
              publicPath: '/_next/static/media',
              outputPath: 'static/media',
              fallback: require.resolve('file-loader'),
            },
          },
          {
            loader: require.resolve('svgo-loader'),
          },
        ],
      },
      {
        test: /\.inline.svg$/i,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: true,
            },
          },
        ],
      },
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

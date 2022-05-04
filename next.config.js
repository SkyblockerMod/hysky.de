const withPWA = require("next-pwa");
const prod = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  swcMinify: true,
  experimental: {
    outputStandalone: true,
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=1440000, must-revalidate',
          }
        ],
      },
    ]
  },

  pwa: {
    disable: prod ? false : true,
    dest: "public",
    //    register: true,
    //    skipWaiting: true,
  },


  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  },
  webpackDevMiddleware: (config) => {
    return config;
  },

  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
  images: {
    domains: ['github.com', 'cdn.ko-fi.com', 'hysky.de'],
  },
  distDir: process.env.DISTDIR
})

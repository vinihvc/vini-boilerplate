/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const isProd = process.env.NODE_ENV === 'production'

module.exports = withBundleAnalyzer(
  withPWA({
    reactStrictMode: true,
    pwa: {
      dest: 'public',
      disable: !isProd
    },
    // Replace React with Preact
    webpack: (config, { dev, isServer }) => {
      // only in client production build
      if (!dev && !isServer) {
        Object.assign(config.resolve.alias, {
          react: 'preact/compat',
          'react-dom/test-utils': 'preact/test-utils',
          'react-dom': 'preact/compat'
        })
      }

      return config
    }
  })
)

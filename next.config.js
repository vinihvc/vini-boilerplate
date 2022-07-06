/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const isProd = process.env.NODE_ENV === 'production'

module.exports = withBundleAnalyzer(
  withPWA({
    reactStrictMode: true,
    swcMinify: true,
    pwa: {
      dest: 'public',
      disable: !isProd,
    },
  }),
)

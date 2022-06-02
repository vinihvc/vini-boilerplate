module.exports = {
  staticDirs: ['../public'],
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y'
  ],
  typescript: {
    reactDocgen: false
  },
  core: {
    builder: 'webpack5'
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)

    return config
  }
}

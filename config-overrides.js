const path = require('path')

const { override, addWebpackAlias } = require('customize-cra')

module.exports = override(
  addWebpackAlias({
    '@src': path.resolve(__dirname, 'src'),
    '@store': path.resolve(__dirname, 'src/store'),
    '@endpoints': path.resolve(__dirname, 'src/api'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@types': path.resolve(__dirname, 'src/types'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@icons': path.resolve(__dirname, 'src/assets/icons'),
  }),
)

const { merge } = require('webpack-merge')
const webpack = require('webpack')
const baseConfig = require('./webpack.base')
const { PATH_PUBLIC } = require('./utils/path')
const { PORT } = require('./utils/env')
// React组件热更新
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

/**
 * @type {import('webpack').Configuration}
 */
const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: {
      directory: PATH_PUBLIC
    },
    compress: true,
    port: PORT,
    hot: true,
    host: '0.0.0.0'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_URL': '"dev"'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin()
  ]
}
module.exports = merge(baseConfig, devConfig)

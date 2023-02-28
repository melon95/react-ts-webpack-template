const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const { PATH_PUBLIC } = require('./utils/path')

// 复制public文件下的内容
const CopyPlugin = require('copy-webpack-plugin')
// 生成gzip文件
const CompressionPlugin = require('compression-webpack-plugin')
// 把css提取为单独的css文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 压缩css文件
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

/**
 * @type {import('webpack').Configuration}
 */
const prodConfig = {
  mode: 'production',
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          chunks: 'initial',
          priority: 1,
          reuseExistingChunk: true,
          filename: 'js/react.[contenthash].js'
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          priority: -10,
          reuseExistingChunk: true,
          name: 'vendors'
        },
        commons: {
          minChunks: 2,
          name: 'commons',
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: {
      name: 'runtime'
    }
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          to: './',
          filter: (resourcePath) => !resourcePath.endsWith('index.html')
        }
      ]
    }),
    new CompressionPlugin({
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: /\.js$|\.json$|\.css/,
      threshold: 10240, // 只有大小大于该值的资源会被处理
      minRatio: 0.8 // 只有压缩率小于这个值的资源才会被处理
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css'
    }),
    new WebpackManifestPlugin({
      fileName: 'asset-manifest.json',
      publicPath: PATH_PUBLIC,
      generate: (seed, files, entrypoints) => {
        const manifestFiles = files.reduce((manifest, file) => {
          manifest[file.name] = file.path
          return manifest
        }, seed)
        const entrypointFiles = entrypoints.main.filter(
          (fileName) => !fileName.endsWith('.map')
        )

        return {
          files: manifestFiles,
          entrypoints: entrypointFiles
        }
      }
    })
  ]
}
module.exports = merge(baseConfig, prodConfig)

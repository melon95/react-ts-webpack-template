const path = require('path')
// 生成html文件并引入构建后的资源
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
// 把css提取为单独的css文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { isDevelopment } = require('./utils/env')
const { PATH_OUTPUT, PATH_SRC } = require('./utils/path')
const ESLintPlugin = require('eslint-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const cssLoaders = [
  {
    loader: isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader
  },
  {
    loader: 'css-loader'
  },
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: ['autoprefixer']
      }
    }
  }
]
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: `${PATH_SRC}/index.tsx`,
  output: {
    filename: 'js/[name]-[hash:8].js',
    path: PATH_OUTPUT,
    clean: true
  },
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/,
        exclude: /node_modules/,
        include: [PATH_SRC],
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                isDevelopment && require.resolve('react-refresh/babel')
              ].filter(Boolean)
            }
          }
        ]
      },
      {
        test: /.(scss | sass)$/,
        include: [path.resolve(__dirname, '../src')],
        use: [
          ...cssLoaders,
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /.css$/,
        include: [path.resolve(__dirname, '../src')],
        use: cssLoaders
      },
      {
        test: /.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 小于10kb转base64位
          }
        },
        generator: {
          filename: 'images/[name][ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
      inject: true
    }),
    new webpack.ProgressPlugin({
      activeModules: false,
      entries: true,
      modules: true,
      modulesCount: 5000,
      profile: false,
      dependencies: true,
      dependenciesCount: 10000,
      percentBy: null
    }),
    new ESLintPlugin({
      extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
      context: PATH_SRC
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false
    })
  ],
  cache: {
    type: 'filesystem' // 使用文件缓存
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    // 配置别名
    alias: {}
  }
}

const path = require('path')
const webpack = require('webpack')
// 生成html文件并引入构建后的资源
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 把css提取为单独的css文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { isDevelopment, parseEnvFile } = require('./utils/env')
const { PATH_OUTPUT, PATH_SRC } = require('./utils/path')
// eslint检查
const ESLintPlugin = require('eslint-webpack-plugin')
// babel过程中进行ts语法检查
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
// 打包进度条
const WebpackBar = require('webpackbar')

const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

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

const envVariableObj = parseEnvFile(process.env.NODE_ENV)
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: `${PATH_SRC}/index.tsx`,
  output: {
    filename: 'js/[name]-[contenthash:8].js',
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
    new WebpackBar(),
    new ESLintPlugin({
      extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
      context: PATH_SRC
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false
    }),
    new WindiCSSWebpackPlugin({
      virtualModulePath: 'src',
      server: {
        port: 9999,
        host: 'localhost'
      }
    }),
    envVariableObj && new webpack.DefinePlugin(envVariableObj)
  ],
  cache: {
    type: 'filesystem' // 使用文件缓存
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    // 配置别名
    alias: {
      '@locales': path.join(PATH_SRC, 'locales/hooks'),
      '@utils': path.join(PATH_SRC, 'utils'),
      '@stores': path.join(PATH_SRC, 'stores'),
      '@src': path.join(PATH_SRC, '')
    }
  }
}

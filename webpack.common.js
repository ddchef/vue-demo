const Path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 多线程打包
const HappyPack = require('happypack')
const os = require('os')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })
module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    filename: 'js/[name].[hash].js',
    path: Path.resolve(__dirname, './dist'),
    publicPath: './'
  },
  resolve: {
    alias: {
      '@': Path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    // unchange hash
    new webpack.HashedModuleIdsPlugin(),
    // clear dist file
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    }),
    // creat index.html
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'vue-webpack',
      favicon: './static/favicon.ico'
    }),
    // 多线程打包
    new HappyPack({
      // 用id来标识 happypack处理类文件
      id: 'happyBabel',
      // 如何处理 用法和loader 的配置一样
      loaders: [
        {
          loader: 'babel-loader?cacheDirectory=true'
        }
      ],
      // 共享进程池
      threadPool: happyThreadPool,
      // 允许 HappyPack 输出日志
      verbose: true
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        // 预处理，在vue-loader处理之前进行
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        // 指定检查的目录
        include: [Path.resolve(__dirname, 'src')]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // 使用babel编译js
      {
        test: /\.js$/,
        loader: 'happypack/loader?id=happyBabel',
        exclude: file => (
          /node_modules/.test(file) && !/\.vue\.js/.test(file)
        )
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 5000,
              name: 'imgs/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 5000,
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      }
    ]
  }
}

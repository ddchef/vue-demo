const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common')
const TerserPlugin = require('terser-webpack-plugin')
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'js/[name].[contenthash].js'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i
      })
    ],
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'initial'
        }
      }
    }
  },
  plugins: [
    // setting process.env.NODE_ENV
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
    // 分离css
    // new MiniCssExtractPlugin({
    //   filename: "css/[name].[hash].css",
    //   chunkFilename: 'css/[id].[hash].css'
    // })
  ]
})

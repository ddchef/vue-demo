const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common')
const TerserPlugin = require('terser-webpack-plugin')

module.exports=merge(common,{
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
    splitChunks: {
      cacheGroups:{
        vendors:{
          test:/node_modules/,
          name:'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins:[
    // setting process.env.NODE_ENV
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
})
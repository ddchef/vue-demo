const Path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
  entry:{
    app: './src/index.js'
  },
  output:{
    filename:'[name].bundle.js',
    path: Path.resolve(__dirname,'./dist'),
    publicPath:'/'
  },
  devtool:'inline-source-map',
  plugins:[
    // clear dist file
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns:['dist']
    }),
    // creat index.html
    new HtmlWebpackPlugin({
      title:'vue-webpack'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module:{
    rules:[
      {
        test:/\.vue$/,
        use:[
          'vue-loader'
        ]
      },
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.(jpg|png|svg|gif)$/,
        use:[
          'file-loader'
        ]
      },
      {
        test:/\.(woff|woff2|eot|ttf|otf)$/,
        use:[
          'file-loader'
        ]
      },
    ]
  }
}
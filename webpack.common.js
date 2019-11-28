const Path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
  entry:{
    app: './src/main.js'
  },
  output:{
    filename:'[name].bundle.js',
    path: Path.resolve(__dirname,'./dist'),
    publicPath:'./'
  },
  plugins:[
    // clear dist file
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns:['dist']
    }),
    // creat index.html
    new HtmlWebpackPlugin({
      template: './index.html',
      title:'vue-webpack',
      favicon: './static/favicon.ico'
    }),
    new VueLoaderPlugin()
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
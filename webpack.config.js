const Path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
  entry:{
    app: './src/index.js',
    print: './src/print.js'
  },
  output:{
    filename:'[name].bundle.js',
    path: Path.resolve(__dirname,'./dist')
  },
  plugins:[
    // clear dist file
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns:['dist']
    }),
    // creat index.html
    new HtmlWebpackPlugin({
      title:'vue-webpack'
    })
  ],
  module:{
    rules:[
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
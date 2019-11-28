const WebpackDevServer = require('webpack-dev-server')
const Webpack = require('webpack')

const config = require('./webpack.config.js')
const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost'
}
WebpackDevServer.addDevServerEntrypoints(config,options)
const compiler = Webpack(config)
const app = new WebpackDevServer(compiler,options)

app.listen(3000,'localhost',function(){
  console.log(' dev server is listening http://localhost:3000\n')
})

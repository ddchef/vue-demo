const Express = require('express')
const WebpackDevMiddleware = require('webpack-dev-middleware')
const Webpack = require('webpack')

const app = Express()
const config = require('./webpack.config')
const compiler = Webpack(config)

app.use(WebpackDevMiddleware(compiler,{
  publicPath: config.output.publicPath
}))

app.listen(3000,function(){
  console.log('server is start\n listen http://localhost:3000')
})
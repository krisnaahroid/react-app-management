var config            = require('./base.config')
var webpack           = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var UglifyJSPlugin    = require('uglifyjs-webpack-plugin')

config.entry.app = [
  'babel-polyfill',
  'webpack/webpack-public-path.js',
  'index.js',
]

config.plugins.push(
  new HtmlWebpackPlugin({
    template: 'app/assets/index-prod.html.ejs',
    inject: false,
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new UglifyJSPlugin({
    uglifyOptions: {
      ecma: 6,
      compress: false // hangs without this
    }
  })
)

module.exports = config

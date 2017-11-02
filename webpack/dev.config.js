var config            = require('./base.config')
var webpack           = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

config.entry.app = [
  'babel-polyfill',
  'eventsource-polyfill',
  'webpack/webpack-public-path.js',
  'webpack-hot-middleware/client',
  'index.js',
]

config.plugins.push(
  new webpack.DllReferencePlugin({
    context: '.',
    manifest: require('../public/vendor-manifest.json')
  })
)

config.plugins.push(
  new HtmlWebpackPlugin({
    template: 'app/assets/index.html.ejs',
    inject: false,
  }),
  new webpack.HotModuleReplacementPlugin()
)

module.exports = config

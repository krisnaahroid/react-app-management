var webpack = require('webpack')
var path = require('path')
var packages = require('../package.json')

var vendorLibraries = Object.keys(packages.dependencies)
vendorLibraries.pop()
vendorLibraries.push('connect-history-api-fallback')

module.exports = {
  entry: {
    vendor: vendorLibraries
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '..', 'public'),
    library: '[name]_lib',
  },

  plugins: [
    new webpack.DllPlugin({
      path: 'public/[name]-manifest.json',
      name: '[name]_lib'
    }),
  ],
}

var path              = require('path')
var webpack           = require('webpack')
var autoprefixer      = require('autoprefixer')
var CopyWebpackPlugin = require('copy-webpack-plugin')

var appConfig = {
  site_env: process.env.SITE_ENV || 'development', // e.g. staging, edge
  api_url: process.env.API_URL   || 'http://localhost:3000'
}

var postcssLoaderOptions = {
  plugins: function() {
    return [autoprefixer]
  }
}

var config = {
  entry: {},
  output: {
    path: path.join(__dirname, '..', 'public'),
    filename: (process.env.NODE_ENV === 'production' ? 'javascripts/[name]-[hash].js' : 'javascripts/[name].js'),
    sourceMapFilename: (process.env.NODE_ENV === 'production' ? 'javascripts/[name]-[hash].js.map' : 'javascripts/[name].js.map'),
  },
  cache: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['strict-loader', 'babel-loader?cacheDirectory'],
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        use: ['strict-loader', 'babel-loader?cacheDirectory'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader', options: postcssLoaderOptions }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader', options: postcssLoaderOptions },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve(__dirname, '..', './node_modules/bootstrap/scss')
              ]
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: ['url-loader?limit=1000']
      },
      {
        test: /\.json$/,
        use: ['json-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        use: ['file-loader']
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader'
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, '..', 'app'),
      path.join(__dirname, '..', 'lib'),
      path.join(__dirname, '..'),
      'node_modules'
    ],
    extensions: ['.jsx', '.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        APP_CONFIG: JSON.stringify(appConfig)
      },
    }),
    new webpack.ProvidePlugin({ React: 'react' }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  devtool: process.env.DEVTOOL || 'source-map'
}

if (process.env.NODE_ENV !== 'test') {
  config.plugins.push(
    new CopyWebpackPlugin([
      { from: `app/assets/img/favicons/favicon.ico` },
      { from: `app/assets/img`, to: `assets` } 
    ])
  )
}

module.exports = config

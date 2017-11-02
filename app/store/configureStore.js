module.exports = process.env.APP_CONFIG.site_env === 'production'
  ? require('./configureStore.prod')
  : require('./configureStore.dev')

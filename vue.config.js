module.exports = {
  configureWebpack: {
    resolve: {
      fallback: { "querystring": require.resolve("querystring-es3") }
    }
  }
}
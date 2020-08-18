// import env from './env.url'

module.exports = {
  env: {
    NODE_ENV: '"development"',
    url: '"http://121.40.239.167:8088"'
  },
  defineConstants: {
  },
  mini: {},
  h5: {
    devServer: {
      port: 8890,
      proxy: {
        '/api': {
          target: `http://121.40.239.167:8088/api`,
          pathRewrite: {
            '^/api': '/',
            changeOrigin: true
          }
        }
      },
    }
  }
}

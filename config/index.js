const alias = require('./alias')

const config = {
  projectName: 'myTaro',
  date: '2019-12-17',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  babel: {
    sourceMap: false,
    presets: [
      ['env', {
        modules: false
      }]
    ],
    plugins: [
      'transform-decorators-legacy',
      'transform-class-properties',
      'transform-object-rest-spread'
    ]
  },
  alias: alias,
  defineConstants: {
  },
  plugins: {
    //压缩js
    uglify: {
      enable: true,
      config: {
        warnings: false,
        // 配置项同 https://github.com/mishoo/UglifyJS2#minify-options
        compress: {
          drop_debugger: true,
          drop_console: true
        },
      }
    },
    //压缩css
    csso: {
      enable: true,
      config: {
        // 配置项同 https://github.com/css/csso#minifysource-options
      }
    }
  },
  mini: {
    compile: {
      compressTemplate: true,//打包时是否需要压缩 wxml
    },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: [
            'last 3 versions',
            'Android >= 4.1',
            'ios >= 8'
          ]
        }
      },
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 10 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    webpackChain (chain, webpack) {
      chain.merge({})
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    router: {
      // 开启browser模式后，通过配置Nginx，访问任何URI都指向index.html
      mode: 'browser' // hash / browser
    },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: [
            'last 3 versions',
            'Android >= 4.1',
            'ios >= 8'
          ]
        }
      },
      // css modules 功能开关与相关配置
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module',
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    esnextModules: ['taro-ui'],
    webpackChain (chain, webpack) {
      chain.merge({})
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}

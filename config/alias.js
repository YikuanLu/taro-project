const path = require('path')

module.exports = {
  '@': path.resolve(__dirname, '..', 'src/'),
  '@/icon':path.resolve(__dirname, '..', 'src/iconfont'),

  '@/package': path.resolve(__dirname, '..', 'package.json'),
  '@/project': path.resolve(__dirname, '..', 'project.config.json'),
}

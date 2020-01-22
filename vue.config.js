const path = require('path');

module.exports = {
  lintOnSave: false,

  pwa: {
    name: '哔桌面',
    themeColor: '#01affd',
    msTileColor: '#ffffff',
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/styles/global.less')],
    },
  },
};

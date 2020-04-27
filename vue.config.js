const path = require('path');

module.exports = {
  lintOnSave: false,

  pwa: {
    name: '哔桌面',
    themeColor: '#01affd',
    msTileColor: '#ffffff',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: path.join(__dirname, './public/workbox-cdn/releases/4.3.1/workbox-sw.js'),
      // ...other Workbox options...
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/styles/global.less')],
    },
  },
};

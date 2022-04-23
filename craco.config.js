const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@border-radius-base': '9px', },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
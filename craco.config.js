const CracoLessPlugin = require('craco-less');
const CracoAlias = require("craco-alias");


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
    
    {
      plugin: CracoAlias,
      options: {
        baseUrl: "./src",
        source: "tsconfig",
        tsConfigPath: "./tsconfig.extend.json"
      }
    },
  ],
};
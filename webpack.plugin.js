// docusaurus-plugin/src/index.js
module.exports = function() {
  return {
    name: "custom-webpack-plugin",
    configureWebpack() {
      /** @type {import('webpack').Configuration} */
      const updatedConfig = {
        resolve: {
          symlinks: false,
        },
      };
      return updatedConfig;
    }
  };
};

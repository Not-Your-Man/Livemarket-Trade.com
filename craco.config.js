const { overrideWebpackConfig } = require('@craco/craco');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  overrideWebpackConfig: ({ webpackConfig, context: { env, paths } }) => {
    webpackConfig.plugins.push(new ReactRefreshPlugin());

    return webpackConfig;
  },
};

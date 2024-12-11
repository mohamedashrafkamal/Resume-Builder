const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@': path.resolve(__dirname, 'src'),
    },
  };

  if (
    process.env.REACT_APP_GENERATE_SOURCEMAP === false ||
    process.env.GENERATE_SOURCEMAP === false
  ) {
    config.devtool = false;
  }

  return config;
};

const path = require('path');
const { merge } = require('webpack-merge');
const common = require('../../webpack.common.js');

module.exports = merge(common, {
  entry: './esm/index.js',
  output: {
    filename: 'cy-hooks.js',
    library: '@cy-group/react-use',
    path: path.resolve(__dirname, './dist'),
  },
});

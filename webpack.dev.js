const path = require('path');
const fs = require('fs');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

// root path for this project
const ROOT = __dirname;

module.exports = merge(common, {
  mode: 'development',
  resolve: {
    alias: {
      "react": path.resolve(__dirname, './node_modules/offshore-components/node_modules/react'),
      "react-dom": path.resolve(__dirname, './node_modules/offshore-components/node_modules/react-dom'),
    },
  },
  devServer: {
    contentBase: './build',
    hot: true,
    open: true,
    historyApiFallback: true,
    port: 3000,
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(ROOT, 'build'),
  },
});
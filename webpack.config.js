const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build', 'js'),
    publicPath: 'build/js',
  },
  // For sourcemaps
  devtool: 'cheap-module-eval-source-map',
  // The below is default so not strictly necessary
  devServer: {
    contentBase: './',
  },
  // TODO: Fix this.
  // plugins: [new CleanPlugin.CleanWebpackPlugin()],
};

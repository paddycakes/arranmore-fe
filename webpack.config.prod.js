const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build', 'js'),
    publicPath: 'build/js',
  },
  devtool: 'cheap-source-map',
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};

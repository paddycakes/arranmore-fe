const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build', 'static', 'js'),
    publicPath: 'build/static/js',
  },
  // The below is default so not strictly necessary
  devServer: {
    contentBase: './',
  },
};

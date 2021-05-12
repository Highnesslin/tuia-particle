const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'out'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
        // MiniCssExtractPlugin.loader,
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: '/node_modules/',
      },
    ],
  },
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     filename: '[name].css',
  //   }),
  // ],
  devServer: {
    contentBase: path.join(__dirname, 'out'),
    // open: true,
    port: 3000,
  },
};

const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const assetsPath = path.resolve(__dirname, '../dist');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

/* Shared webpack between clientDev and clientProd.
*  - shares entry, output, css
*/

module.exports = {
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: {
    client: [
      '@babel/polyfill',
      './src/client/public/index.jsx'
    ]
  },
  output: {
    publicPath: '/',
    path: assetsPath,
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.css$/, 
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.ttf$/,
        use: 'file-loader',
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin({ filename: 'styles.css',})]
};

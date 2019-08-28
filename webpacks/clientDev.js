const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./clientCommon');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const port = process.env.PORT || 3000;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    watchOptions: {
      poll: true
    },
    publicPath: '/',
    contentBase: path.join(__dirname, '../src/client/public'),
    inline: true,
    port: 8080, 
    proxy: {
      '**': {
        target: `http://localhost:${port}`,
        changeOrigin: true,
        secure:false
      }
    }
  },
});

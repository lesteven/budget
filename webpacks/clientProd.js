const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./clientCommon');
// const CompressionPlugin = require("compression-webpack-plugin");


module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
      new webpack.optimize.AggressiveMergingPlugin(),
/*
      new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$|\.svg$/,
        minRatio: 0.8
      }),
*/
  ],
});

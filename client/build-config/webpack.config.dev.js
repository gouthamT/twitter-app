const path = require('path');
const merge = require("webpack-merge");
const BaseConfig = require("./webpack.config.base");
const webpack = require("webpack");

module.exports = merge(BaseConfig, {
  mode: "development",
  devServer: {
    port: 5000,
    historyApiFallback: true,
    hot: true
  },
  output: {
    path: path.join(__dirname, "/../dist/"),
    chunkFilename: "[name].bundle.js",
    filename: "[name].bundle.js"
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-hot-loader/webpack"
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});

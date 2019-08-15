const path = require("path");
const merge = require("webpack-merge");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BaseConfig = require("./webpack.config.base");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const DistPath = '../../api/dist';

module.exports = merge(BaseConfig, {
  mode: "production",
  output: {
    path: path.join(__dirname, DistPath),
    publicPath: "/",
    chunkFilename: "[name].bundle.js",
    filename: "[name].bundle.js"
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ["default", { discardComments: { removeAll: true } }]
        }
      })
    ],
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        parallel: true,
        uglifyOptions: {
          output: {
            comments: false
          },
        }
      }),
    ],
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "appBundle_Analyzer.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].css"
    })
  ]
});

const path = require("path");
var webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/roles"
  },
  mode: "production",
  amd: false,
  node: {
    fs: "empty"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: "css-loader"
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.template.html",
      hash: true
    }),
    new CopyPlugin([
      {
        from: "./node_modules/firestore-roles-manager-ui/dist/img",
        to: "img"
      },
      {
        from: "./public",
        to: ""
      }
    ])
  ]
};

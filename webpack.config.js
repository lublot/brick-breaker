const path = require("path");

module.exports = {
  context: path.resolve(__dirname),
  devtool: "inline-source-map",
  entry: "./app/lib/index.ts",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "app/src/dist/js"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
};

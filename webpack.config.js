const path = require("path")

module.exports = {
  entry: {
    clearui: "./lib/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "dist/lib"),
    library: "clearui",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", "jsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  }
}
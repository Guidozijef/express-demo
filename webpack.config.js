const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./app.js", // 入口文件
  target: "node", // 打包 Node.js 应用
  externals: [webpackNodeExternals()], // 忽略 node_modules 中的依赖，不打包
  output: {
    path: path.resolve(__dirname, "dist"), // 输出目录
    filename: "bundle.js", // 输出文件名
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // 使用 Babel 编译代码
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // 添加 CleanWebpackPlugin 插件
  ],
};

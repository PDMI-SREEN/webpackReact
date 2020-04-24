const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  output: {
    filename: './bundle.js',
    chunkFilename: 'bundle.js'
  },
  resolve:{
    extensions: [".ts", ".jsx", ".js",".tsx","ts"],
  },
  devServer:{
    hot: true,  // 热加载
    compress: true,
    open: true,  // 
    host: "localhost",
    port: 8090,
  },
  devtool: 'source-map',
  module: {
    rules: [
      // 处理js、jsx
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      }, 
      // 处理样式
      {
        test: /\.css$/,
        use:ExtractTextPlugin.extract({ //分离less编译后的css文件
          fallback:'style-loader',
          use:['css-loader']
      }),
      },
      {
        test:/\.less$/,
        use:ExtractTextPlugin.extract({ //分离less编译后的css文件
            fallback:'style-loader',
            use:['css-loader','less-loader']
        })
    },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './index.css',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '主文件',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true
      },
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html'),
      chunks: ['app']
    }),
    new ForkTsCheckerWebpackPlugin({
      // 将async设为false，可以阻止Webpack的emit以等待类型检查器/linter，并向Webpack的编译添加错误。
      async: false
    }),
    // 将TypeScript类型检查错误以弹框提示
    // 如果fork-ts-checker-webpack-plugin的async为false时可以不用
    // 否则建议使用，以方便发现错误
    new ForkTsCheckerNotifierWebpackPlugin({
        title: 'TypeScript',
        excludeWarnings: true,
        skipSuccessful: true,
    }),
  ]
}
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: './bundle.js',
    chunkFilename: 'bundle.js'
  },
  resolve:{
    extensions: [".ts", ".jsx", ".js"],
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
        test: /\.(js|jsx)$/,
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
    })
  ]
}
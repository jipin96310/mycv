const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:9090',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, '../src/index.js'),
    
    
  ], // 指定入口文件s，程序s从这里开始编译,__dirname当前目录, ../表示上一级目录, ./同级目录
  output: {
    path: path.resolve(__dirname, '../dist'), // 输出的路径
    filename: 'app/[name]_[hash:8].js', // 打包后文件
    
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader', // 加载器
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [{
            loader: 'style-loader'
        }, {
            loader: 'css-loader'
        }],
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'less-loader',
          options: {
            sourceMap: true,
          },
        }],
      },
      
        {　test: /\.(png|jpg|gif)$/,
          use: [{
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]' //打包后在img目录下
          }]},
          　
          
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.template.html'),
      inject: true,
    }),
  ],
};
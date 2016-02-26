var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname,'build');
var nodemodulesPath = path.resolve(__dirname,'node_modules');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

var config = {
  entry:[
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    path.join(__dirname,'src/app/app.jsx')
  ],
  resolve:{
    extensions:["",".js",".jsx"]
  },
  devServer:{
    contentBase:'src/www',
    hot:true,
    port:3000
  },
  output:{
    path:buildPath,
    filename:'app.js'
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new TransferWebpackPlugin([
      {from:'www'}
    ],path.resolve(__dirname,'src'))
  ], 
  module:{
    loaders:[
      {
        test:/\.(js|jsx)$/,
        loaders:['react-hot','babel'],
        exclude:[nodemodulesPath]
      }
    ]
  }
  
  
  
};

module.exports = config;


var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname,'build');
var nodemodulesPath = path.resolve(__dirname,'node_modules');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

var config = {
  entry:[path.join(__dirname,'/src/app/app.jsx')],
  resolve:{
    extensions:["",".js",".jsx"]
  },
  output:{
    path:buildPath,
    filename:'app.js'
  },
  plugins:[
    new TransferWebpackPlugin([
      {from:'www'}
    ],path.resolve(__dirname,'src'))
  ], 
  module:{
    loaders:[
      {
        test:/\.(js|jsx)$/,
        loaders:['babel'],
        exclude:[nodemodulesPath]
      }
    ]
  }
  
  
  
};

module.exports = config;


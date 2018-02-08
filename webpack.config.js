var webpack = require('webpack'),
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin')
 
module.exports = {
  entry: {
    app: [
      './app/index.js'
    ]
  }, 
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'    
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [{
        test: /\.js$/,
        loader: "babel-loader",
        include: path.join(__dirname, "app"),
        exclude: /node_modules/,
        query: { presets: [ "es2015","react"] }
    }]
  },
  plugins: [  
    new HtmlWebpackPlugin({
      template: './app/public/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
};

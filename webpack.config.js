var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/App.js',
  /*entry: [
	'webpack-dev-server/client?http://localhost:3000',
	'webpack/hot/only-dev-server',
	'./src/App'
  ],*/
  output: {
    path: BUILD_DIR,
    filename: 'index.js',
	publicPath: 'dist/'
  },
  devtool: debug ? "inline-sourcemap" : null,
  /*plugins: [
	new webpack.HotModuleReplacementPlugin()
  ],*/
  resolve: {
	  alias: {
		"ag-grid-root" : __dirname + "/node_modules/ag-grid"
	  }
  },
  module : {
    loaders : [
      { test : /\.jsx?/, include : APP_DIR, loader : 'babel' },
	  /*{ 
		test : /\.jsx?/, 
		include : APP_DIR, 
		loaders: ['react-hot','babel']
	  },*/
	  { test : /\.scss$/, loader : 'style!css!sass' },
	  { test: /\.css$/, loader: "style!css" }
      
    ]
  }
};

module.exports = config;
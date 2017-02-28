var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR   = path.resolve(__dirname, 'src');

var config = {
  /*entry: {
	  app: ["./src/index.js"]
  },*/
  devServer: {
	contentBase: './dist',
	hot: true,
    inline: true,
    color: true
  },
  entry: [
	'webpack-dev-server/client?http://localhost:8080',
	'webpack/hot/only-dev-server',
	'./src/App.js'
  ],
  
  output: {
    path: BUILD_DIR,
    filename: 'index.js',
    publicPath: '/',
  },
  devtool: debug ? "inline-sourcemap" : null,
  /*plugins: [
	new webpack.HotModuleReplacementPlugin()
  ],*/
  resolve: {
	  
    extensions: ['', '.js', '.json'],
	  alias: {
		"ag-grid-root" : __dirname + "/node_modules/ag-grid"
	  }
  },
  module : {
    loaders : [
      /*{ test : /\.jsx?/, include : APP_DIR, loader : 'babel' },*/
	  { 
		test : /\.jsx?/, 
		include : APP_DIR, 
		loaders: ['react-hot','babel']
	  },
	  { test : /\.scss$/, loader : 'style!css!sass' },
	  { test: /\.css$/, loader: "style!css" }
      
    ]
  },
  plugins: [
  new webpack.HotModuleReplacementPlugin()
]
};

module.exports = config;
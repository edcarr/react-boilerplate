var webpack = require('webpack');
var path = require('path');  
var ROOT_PATH = path.resolve(__dirname);

module.exports = {  
  entry: [
    path.resolve(ROOT_PATH, 'app/app'),
    'bootstrap-loader'
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ["es2015", "stage-0", "react"]
      }
    },
    {
      test: /\.scss$/,
      loaders: ['style','css','sass']
    },
    {
      test: /\.(woff2?|ttf|eot|svg)$/,
      loader: 'url?limit=10000'
    },
    {
      test: /bootstrap-sass\/assets\/javascripts\//,
      loader: 'imports?jQuery=jquery'
    }
  ]},
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(ROOT_PATH, 'dist'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      jQuery: "jquery"
    })
  ]
};
const path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  // module: {
  //   loaders: [
  //     {test:/\.css$/, loader: 'style!css'},
  //     {test:/\.js$/, loader: 'react-hot-loader!babel-loader', exclude: /node_modules/},
  //   ]
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }, {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [{
          loader: 'style-loader'
        },{
          loader: 'css-loader'
        },{
          loader: 'less-loader'
        }]
      }
    ]
  },
  watch: true
};

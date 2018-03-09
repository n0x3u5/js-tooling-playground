const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    'demo': './src/modules/exposed/demo.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'Demo',
    libraryExport: 'default',
    umdNamedDefine: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  optimization: {
    splitChunks: {
      name: 'demo.common',
      minSize: 1
    }
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  target: 'web',
  mode: 'none',
  devServer: {
    contentBase: path.join(__dirname, 'sample'),
    host: '0.0.0.0',
    useLocalIp: true,
    watchContentBase: true
  }
}

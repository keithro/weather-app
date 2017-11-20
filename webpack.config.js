const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = (env) => {
  const isProduction = env === 'production';
  // crate variable to use in "plugins"
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: './src/js/app.js',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };
};

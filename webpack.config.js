const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  watch: true,
  entry: ['./src/index.tsx'],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader?sourceMap=true', 'sass-loader']
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
            outputPath: 'fonts',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: `${__dirname}/public`,
    publicPath: '/',
    filename: 'app.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    liveReload: true,
    port: 9000,
    historyApiFallback: true,
    writeToDisk: true,
  },
};

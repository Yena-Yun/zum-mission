import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import { resolve } from 'path';

module.exports = {
  mode: 'development',
  entry: {
    router: './router.js',
    app: './index.js',
  },

  output: {
    path: resolve(__dirname, './dist'), // 번들 파일 폴더
    filename: '[name].js', // 번들 파일 이름 규칙
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // output file name
      template: 'index.html', // template file name
    }),
    new MiniCssExtractPlugin({ filename: 'app.css' }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist'],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};

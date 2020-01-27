module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["css-loader", "style-loader"]
      },
      { test: /\.ts$/, exclude: /node_modules/, use: "ts-loader" },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader"
          //loader: "file?name=[path][name].[ext]?[hash]&context=./node_modules"
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: ["file-loader"]
      },
      {
        test: /\.(csv|tsv)$/,
        exclude: /node_modules/,
        use: ["csv-loader"]
      },
      {
        test: /\.xml$/,
        exclude: /node_modules/,
        use: ["xml-loader"]
      }
      // {
      //     test: /\.(jpg|png|svg)$/,
      //     loader: 'file-loader',
      //     options: {
      //       name: '[path][name].[hash].[ext]',
      //     },
      // },
    ]
  }
};

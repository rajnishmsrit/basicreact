const path = require('path');
module.exports = {
    entry: './src/main.jsx',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'public')
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["css-loader"],
      }]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
};

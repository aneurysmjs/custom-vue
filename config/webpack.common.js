const { setupPath } = require(`./helpers`),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/main.js',

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'styles$': setupPath('../src/assets/scss/styles.scss'),
      'pages': setupPath('../src/pages'),
      'components': setupPath('../src/components'),
      'shared': setupPath('../src/shared')
    },
    extensions: [`.js`, `.vue`]
  },

  module: {

    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the 'scss' and 'sass' values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.scss/,
        enforce: 'pre',
        loader: 'import-glob-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader?name=assets/img/[name].[ext]'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: setupPath(`../src/index.html`)
    }),
    // copy files and folders to specific paths.
    new CopyWebpackPlugin([{
      // Copy `assets` contents to {output}/assets/
      from: 'src/assets',
      to: 'assets',
      ignore: [
        // Doesn't copy any files with a scss extension
        '*.scss'
      ],
    }])
  ]
};
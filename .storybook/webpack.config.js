const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: './assets/scss/main.scss'
            }
          }
          
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.dirname(path.resolve(__dirname))
    }
  }
}

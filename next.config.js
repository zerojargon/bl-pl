const path = require('path')
const glob = require('glob')

module.exports = {
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    config.module.rules.push(
      {
        test: /\.(css|less)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      }
    ,
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      }
    ,
      {
        test: /\.less$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          { loader: 'less-loader',
            options: {
              includePaths: ['styles', 'node_modules']
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    )
    // Important: return the modified config
    return config
  }
}

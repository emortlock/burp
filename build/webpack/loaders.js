const loaders = {
  svg: {
    test: /\.svg$/,
    use: [
      {
        loader: 'babel-loader',
      },
      {
        loader: 'react-svg-loader',
        options: {
          jsx: true,
        },
      },
    ],
  },
}

module.exports = config => {
  const module = Object.assign({}, config.module)

  module.rules = module.rules.concat(
    Object.keys(loaders).map(key => loaders[key]),
  )

  return { module }
}

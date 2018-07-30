module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          modules: false,
          targets: { browsers: ['>2%'] },
        },
      },
    ],
  ],
  env: {
    test: {
      presets: [
        [
          'next/babel',
          {
            'preset-env': {
              modules: 'commonjs',
              targets: { node: '8.11.3' },
            },
          },
        ],
      ],
    },
  },
}

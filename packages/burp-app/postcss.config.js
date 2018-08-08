const path = require('path')

const autoprefixer = require('autoprefixer')
const atImport = require('postcss-import')
const nested = require('postcss-nested')
const colorFunctions = require('postcss-color-function')
const syntax = require('postcss-scss')
const clean = require('postcss-clean')
const tailwind = require('tailwindcss')

module.exports = {
  syntax,
  plugins: [
    atImport(),
    nested(),
    tailwind(
      path.join(__dirname, 'src', 'client', 'styles', 'tailwind.config.js'),
    ),
    colorFunctions(),
    autoprefixer(),
    clean(),
  ],
}

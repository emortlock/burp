/* eslint-disable global-require */

// window.Promise polyfill
if (typeof Promise === 'undefined') {
  require('promise/lib/rejection-tracking').enable()
  window.Promise = require('promise/lib/es6-extensions.js')
}

// window.fetch polyfill
require('whatwg-fetch')

// Object.assign() ponyfill`
Object.assign = require('object-assign')

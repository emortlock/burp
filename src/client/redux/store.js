import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import getConfig from 'next/config'

import reducer from './reducer'

const { publicRuntimeConfig } = getConfig()

const reduxDevToolsCompose =
  publicRuntimeConfig.isDev && typeof window === 'object'
    ? // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : undefined

const composeEnhancers = reduxDevToolsCompose || compose

export default (initialState = {}) =>
  createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunkMiddleware)),
  )

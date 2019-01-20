/* eslint-disable no-underscore-dangle */
import React from 'react'
import PropTypes from 'prop-types'
import initializeStore from '../../redux/store'

const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState)
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState)
  }
  return window[__NEXT_REDUX_STORE__]
}

export default App => {
  class AppWithRedux extends React.Component {
    constructor(props) {
      super(props)
      this.reduxStore = getOrCreateStore(props.initialReduxState)
    }

    static async getInitialProps(context) {
      const appContext = { ...context }
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore()

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore

      let appProps = {}
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps.call(App, appContext)
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState(),
      }
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />
    }
  }

  AppWithRedux.propTypes = {
    initialReduxState: PropTypes.shape({}),
  }

  AppWithRedux.defaultProps = {
    initialReduxState: {},
  }

  return AppWithRedux
}

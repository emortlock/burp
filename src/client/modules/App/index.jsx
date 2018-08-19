import App, { Container } from 'next/app'
import React from 'react'
import getConfig from 'next/config'
import { Provider } from 'react-redux'

import withReduxStore from '../../hoc/withReduxStore'

import log from '../../utils/log'

const { publicRuntimeConfig } = getConfig()

class SiteApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount() {
    if (!publicRuntimeConfig.isDev && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(() => {
          if (publicRuntimeConfig.showLogs) {
            log.info('service worker registration successful')
          }
        })
        .catch(err => {
          if (publicRuntimeConfig.showLogs) {
            log.warn('service worker registration failed', err.message)
          }
        })
    }
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(SiteApp)

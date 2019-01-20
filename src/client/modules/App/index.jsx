import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'

import withReduxStore from '../../hoc/withReduxStore'

import * as serviceWorker from '../../utils/serviceWorker'

class SiteApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount() {
    serviceWorker.register()
    serviceWorker.update()
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

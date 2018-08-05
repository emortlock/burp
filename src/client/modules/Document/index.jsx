import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

import setWindowTitle from '../../utils/setWindowTitle'
import setMetaDescription from '../../utils/setMetaDescription'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            key="x-ua-compatible"
            httpEquiv="x-ua-compatible"
            content="ie=edge"
          />
          <title key="title">{setWindowTitle()}</title>
          <meta
            key="description"
            name="description"
            content={setMetaDescription()}
          />
          <meta
            key="viewport"
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
          <meta
            key="theme-color"
            name="theme-color"
            content={
              // eslint-disable-next-line global-require,import/no-webpack-loader-syntax
              require('!!json-loader!../../../../static/site.webmanifest')
                .theme_color
            }
          />

          <link key="favicon" rel="icon" href="/static/favicon.ico" />
          <link key="manifest" rel="manifest" href="/static/site.webmanifest" />

          <link
            key="stylesheet-main"
            rel="stylesheet"
            href="/_next/static/style.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

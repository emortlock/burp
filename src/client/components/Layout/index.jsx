import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { TailwindThemeProvider, SiteWrap, Container } from 'tailwind-react-ui'

import setWindowTitle from '../../utils/setWindowTitle'
import setMetaDescription from '../../utils/setMetaDescription'

import Header from '../Header'
import Footer from '../Footer'

import '../../styles/index.css'

const Layout = ({ children }) => (
  <Fragment>
    <Head>
      <title>{setWindowTitle()}</title>
      <meta
        key="description"
        name="description"
        content={setMetaDescription()}
      />
    </Head>
    <TailwindThemeProvider
      theme={{
        brandColors: {
          primary: 'primary',
          secondary: 'secondary',
        },
      }}
    >
      <SiteWrap>
        <Header />
        <Container padding className="pt-4">
          {children}
        </Container>
        <Footer />
      </SiteWrap>
    </TailwindThemeProvider>
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node,
}

Layout.defaultProps = {
  children: undefined,
}

export default Layout

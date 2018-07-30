import React from 'react'
import PropTypes from 'prop-types'

import Header from '../Header'
import Footer from '../Footer'
import Container from '../Container'

import '../../styles/index.css'

const Layout = ({ children }) => (
  <div className="flex flex-col absolute pin overflow-auto">
    <div className="flex-auto	flex-no-shrink">
      <Header />
      <Container className="p-4">{children}</Container>
    </div>
    <div className="flex-auto	flex-no-shrink flex-no-grow">
      <Footer />
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node,
}

Layout.defaultProps = {
  children: undefined,
}

export default Layout

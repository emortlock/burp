import React from 'react'
import PropTypes from 'prop-types'
import { Container as TwContainer } from 'tailwind-react'

const Container = ({ children, className, alignLeft, ...rest }) => (
  <TwContainer {...rest} leftAlign={alignLeft} className={className}>
    {children}
  </TwContainer>
)

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  alignLeft: PropTypes.bool,
}

Container.defaultProps = {
  children: undefined,
  className: undefined,
  alignLeft: false,
}

export default Container

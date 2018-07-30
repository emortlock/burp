import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Container = ({ children, className, alignLeft, ...rest }) => (
  <div
    {...rest}
    className={classnames('container', !alignLeft && 'mx-auto', className)}
  >
    {children}
  </div>
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

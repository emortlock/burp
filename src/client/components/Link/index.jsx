import React from 'react'
import PropTypes from 'prop-types'
import NextLink from 'next/link'

/* eslint-disable jsx-a11y/anchor-is-valid */
const Link = ({ children, className, href, ...rest }) => (
  <NextLink href={href}>
    <a className={className} {...rest}>
      {children}
    </a>
  </NextLink>
)

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
}

Link.defaultProps = {
  children: undefined,
  className: undefined,
}

export default Link

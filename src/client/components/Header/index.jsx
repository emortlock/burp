import React from 'react'
import PropTypes from 'prop-types'
import { withStateHandlers } from 'recompose'
import classnames from 'classnames'

import Logo from '../../assets/images/logo.svg'

import Link from '../Link'
import Container from '../Container'

const Header = ({ open, toggleOpen }) => (
  <nav className="bg-primary py-6" aria-label="main navigation">
    <Container className="flex items-center justify-between flex-wrap px-4">
      <div className="flex items-center flex-no-shrink mr-6">
        <Link
          href="/"
          className="text-white font-semibold text-xl no-underline"
        >
          <Logo width="128" height="41" className="fill-current" />
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleOpen()}
          className="flex items-center px-3 py-2 border rounded text-secondary border-secondary hover:text-white hover:border-white"
          aria-label="menu"
          aria-expanded={open}
          type="button"
        >
          <svg
            aria-hidden="true"
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={classnames(
          open ? 'block' : 'hidden',
          'w-full flex-grow lg:flex lg:items-center lg:w-auto',
        )}
      >
        <div className="text-sm lg:flex-grow">
          <Link
            className="block mt-4 lg:inline-block lg:mt-0 text-secondary hover:text-white mr-4"
            href="/about"
          >
            About
          </Link>
        </div>
      </div>
    </Container>
  </nav>
)

Header.propTypes = {
  open: PropTypes.bool,
  toggleOpen: PropTypes.func.isRequired,
}

Header.defaultProps = {
  open: false,
}

export { Header as component }

export default withStateHandlers(
  ({ defaultOpen = false }) => ({
    open: defaultOpen,
  }),
  {
    toggleOpen: ({ open }) => () => ({ open: !open }),
  },
)(Header)

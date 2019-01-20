import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'

import {
  Header as TwHeader,
  NavBrand,
  NavToggle,
  NavMenu,
  NavItem,
} from 'tailwind-react-ui'

import Logo from '../../assets/images/logo.svg'

import Link from '../Link'

const routes = [
  { name: 'About', href: '/about' },
  { name: 'Todos', href: '/todos' },
]

const Header = ({ router }) => (
  <TwHeader id="header">
    <NavBrand is={Link} href="/">
      <Logo width="128" height="41" className="fill-current -mt-3" />
    </NavBrand>
    <NavToggle />
    <NavMenu>
      {routes.map(route => (
        <NavItem
          key={route.href}
          is={Link}
          href={route.href}
          active={router.pathname === route.href}
        >
          {route.name}
        </NavItem>
      ))}
    </NavMenu>
  </TwHeader>
)

Header.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

Header.defaultProps = {
  router: {},
}

export default withRouter(Header)

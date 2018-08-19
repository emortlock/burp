import React from 'react'

import {
  Header as TwHeader,
  NavBrand,
  NavToggle,
  NavMenu,
  NavItem,
} from 'tailwind-react'

import Logo from '../../assets/images/logo.svg'

import Link from '../Link'

const Header = () => (
  <TwHeader>
    <NavBrand is={props => <Link {...props} href="/" />}>
      <Logo width="128" height="41" className="fill-current -mt-3" />
    </NavBrand>
    <NavToggle />
    <NavMenu>
      <NavItem is={props => <Link {...props} href="/about" />}>About</NavItem>
      <NavItem is={props => <Link {...props} href="/todos" />}>Todos</NavItem>
    </NavMenu>
  </TwHeader>
)

export default Header

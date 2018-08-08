import React from 'react'
import { shallow } from 'enzyme'

import { component as Header } from '..'

const setup = (testProps = {}) => {
  const props = {
    toggleOpen: () => {},
    ...testProps,
  }

  const wrapper = shallow(<Header {...props} />)

  return {
    props,
    wrapper,
  }
}

describe('Header', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})

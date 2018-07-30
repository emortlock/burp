import React from 'react'
import { shallow } from 'enzyme'

import Header from '..'

const setup = (testProps = {}) => {
  const props = {
    text: 'Some text',
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

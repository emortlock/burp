import React from 'react'
import { shallow } from 'enzyme'

import Footer from '..'

const setup = (testProps = {}) => {
  const props = {
    text: 'Some text',
    ...testProps,
  }

  const wrapper = shallow(<Footer {...props} />)

  return {
    props,
    wrapper,
  }
}

describe('Footer', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})

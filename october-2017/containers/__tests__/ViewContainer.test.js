import React from 'react'
import ViewContainer from '../ViewContainer'

import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const rendered = renderer.create(<ViewContainer />).toJSON()
  expect(rendered).toBeTruthy()
  expect(rendered).toMatchSnapshot()
})

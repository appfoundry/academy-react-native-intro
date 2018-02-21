import React from 'react'
import ProfileContainer from '../ProfileContainer'

import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const rendered = renderer.create(<ProfileContainer />).toJSON()
  expect(rendered).toBeTruthy()
})

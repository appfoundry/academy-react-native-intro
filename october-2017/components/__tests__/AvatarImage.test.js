import React from 'react'
import AvatarImage from '../AvatarImage'

import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const rendered = renderer.create(<AvatarImage />).toJSON()
  expect(rendered).toBeTruthy()
})

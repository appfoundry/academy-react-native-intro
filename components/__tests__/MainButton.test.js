import React from 'react'
import MainButton from '../MainButton'

import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const rendered = renderer.create(<MainButton label="test label" />).toJSON()
  expect(rendered).toBeTruthy()
})

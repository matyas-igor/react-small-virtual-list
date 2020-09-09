import React from 'react'
import * as ReactDOM from 'react-dom'
import { Default as VirtualList } from '../stories/VirtualList.stories'

describe('VirtualList', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<VirtualList />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

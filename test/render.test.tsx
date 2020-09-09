import * as React from 'react'
import * as ReactDOM from 'react-dom'
import VirtualList, { ItemStyle } from '../src'

const STICKY_INDICES = [0, 5, 8, 15, 30, 50, 100, 200]
const ITEM_STYLE: React.CSSProperties = {
  padding: 8,
  boxSizing: 'border-box',
  fontFamily: 'sans-serif',
}
const renderItem = ({ style, index }: { style: ItemStyle; index: number }) => {
  const isSticky = STICKY_INDICES.includes(index)
  const itemStyle = isSticky ? { ...style, ...ITEM_STYLE, backgroundColor: '#eee' } : { ...style, ...ITEM_STYLE }
  return (
    <div style={itemStyle} key={index}>
      Row #{index} {isSticky ? '(Sticky)' : ''}
    </div>
  )
}

describe('VirtualList', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <VirtualList
        width="auto"
        height={400}
        itemCount={1000}
        renderItem={renderItem}
        itemSize={52}
        stickyIndices={STICKY_INDICES}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})

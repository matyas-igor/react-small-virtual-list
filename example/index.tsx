import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import VirtualList, { ItemStyle } from '../src'

const STICKY_INDICES = [0, 5, 8, 15, 30, 50, 100, 200]

const renderItem = ({ style, index }: { style: ItemStyle; index: number }) => {
  const itemStyle = STICKY_INDICES.includes(index)
    ? {
        ...style,
        backgroundColor: '#EEE',
      }
    : style

  return (
    <div style={itemStyle} key={index}>
      Row #{index}
    </div>
  )
}

const App = () => {
  return (
    <VirtualList
      width="auto"
      height={400}
      itemCount={1000}
      renderItem={renderItem}
      itemSize={50}
      stickyIndices={STICKY_INDICES}
    />
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

import * as React from 'react'
import VirtualList, { ItemStyle, Props, ScrollAlignment } from '../src'

export default {
  title: 'VirtualList',
}

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

export const Default = (props?: Partial<Props>) => (
  <VirtualList
    width="auto"
    height={400}
    itemCount={1000}
    renderItem={renderItem}
    itemSize={52}
    stickyIndices={STICKY_INDICES}
    {...props}
  />
)

export const Controlled = (props?: Partial<Props>) => {
  const [index, setIndex] = React.useState(null)
  const setNewIndex = React.useCallback(index => {
    setIndex(null)
    setTimeout(() => setIndex(index))
  }, [])
  return (
    <div>
      <Default scrollToIndex={index} {...props} />
      <div style={{ paddingTop: 16 }}>
        <button onClick={() => setNewIndex(5)}>Scroll to 5</button>
        <button onClick={() => setNewIndex(15)}>Scroll to 15</button>
        <button onClick={() => setNewIndex(30)}>Scroll to 30</button>
      </div>
    </div>
  )
}

export const Smart = (props?: Partial<Props>) => <Controlled scrollToAlignment={ScrollAlignment.SMART} />

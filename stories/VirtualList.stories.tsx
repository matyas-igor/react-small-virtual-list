import * as React from 'react'
import VirtualList, { ItemStyle, ScrollAlignment, ScrollDirection } from '../src'

export default {
  title: 'VirtualList',
}

const STICKY_INDICES = [0, 5, 8, 15, 30, 50, 100, 200]
const ITEM_HEIGHT = 48
const ITEM_STYLE: React.CSSProperties = {
  padding: '12px 20px',
  boxSizing: 'border-box',
  fontFamily: 'system-ui, "Helvetica Neue", Helvetica, sans-serif',
  fontSize: '16px',
  lineHeight: '24px',
}

const renderItem = ({ style, index }: { style: ItemStyle; index: number }) => {
  const isSticky = STICKY_INDICES.includes(index)
  const itemStyle = isSticky ? { ...style, ...ITEM_STYLE, backgroundColor: '#f7f7f7' } : { ...style, ...ITEM_STYLE }
  return (
    <div style={itemStyle} key={index}>
      Row #{index} {isSticky ? '(Sticky)' : ''}
    </div>
  )
}

export const Default = () => (
  <div style={{ border: '3px solid #edeff0' }}>
    <VirtualList
      width="auto"
      height={400}
      itemCount={1000}
      renderItem={renderItem}
      itemSize={ITEM_HEIGHT}
      stickyIndices={STICKY_INDICES}
      scrollDirection={ScrollDirection.VERTICAL}
      overscanCount={5}
    />
  </div>
)

export const Controlled = () => {
  const [index, setIndex] = React.useState<number | null>(null)
  const setNewIndex = React.useCallback(index => {
    setIndex(null)
    setTimeout(() => setIndex(index))
  }, [])
  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <button onClick={() => setNewIndex(5)}>Scroll to 5</button>
        &nbsp;
        <button onClick={() => setNewIndex(15)}>Scroll to 15</button>
        &nbsp;
        <button onClick={() => setNewIndex(30)}>Scroll to 30</button>
      </div>
      <div style={{ border: '3px solid #edeff0' }}>
        <VirtualList
          width="auto"
          height={400}
          itemCount={1000}
          renderItem={renderItem}
          itemSize={ITEM_HEIGHT}
          stickyIndices={STICKY_INDICES}
          scrollToIndex={index !== null ? index : undefined}
          scrollDirection={ScrollDirection.VERTICAL}
          overscanCount={5}
        />
      </div>
    </>
  )
}

export const Smart = () => {
  const [index, setIndex] = React.useState<number | null>(null)
  const setNewIndex = React.useCallback(index => {
    setIndex(null)
    setTimeout(() => setIndex(index))
  }, [])
  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <button onClick={() => setNewIndex(5)}>Scroll to 5</button>
        &nbsp;
        <button onClick={() => setNewIndex(15)}>Scroll to 15</button>
        &nbsp;
        <button onClick={() => setNewIndex(30)}>Scroll to 30</button>
      </div>
      <div style={{ border: '3px solid #edeff0' }}>
        <VirtualList
          width="auto"
          height={400}
          itemCount={1000}
          renderItem={renderItem}
          itemSize={ITEM_HEIGHT}
          stickyIndices={STICKY_INDICES}
          scrollToIndex={index !== null ? index : undefined}
          scrollDirection={ScrollDirection.VERTICAL}
          scrollToAlignment={ScrollAlignment.SMART}
          overscanCount={5}
        />
      </div>
    </>
  )
}

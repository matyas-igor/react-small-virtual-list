import React from 'react'
import VirtualList, { ItemStyle, Props } from '../src'

export default {
  title: 'VirtualList',
}

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

export const Default = (props?: Partial<Props>) => (
  <VirtualList
    width="auto"
    height={400}
    itemCount={1000}
    renderItem={renderItem}
    itemSize={50}
    stickyIndices={STICKY_INDICES}
    {...props}
  />
)

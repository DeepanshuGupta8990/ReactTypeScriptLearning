import React from 'react'

type containerProp = {
    styles: React.CSSProperties
}

export default function Container({styles}:containerProp) {
  return (
    <div style={styles}>
      Style Props in typescript
    </div>
  )
}

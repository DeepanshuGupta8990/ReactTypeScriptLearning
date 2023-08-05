import React from 'react'

type headingProp = {
    children: string | React.ReactNode,
}

export default function Heading(props:headingProp) {
  return (
    <div>
       {props.children}
    </div>
  )
}
 
import React from 'react'
type GreetProps = {
    name:string,
    messageCount?:number,
    isLoggedIn:boolean
}

export default function Greet(props:GreetProps) {
  const {messageCount = 0} = props
  return (
    <div>
       <h2>Welcome {props.name}! You have {props.messageCount} unread messages</h2>
       {
        props.isLoggedIn ? <p>The user is logged in</p> : <p>The user is logged out</p>
       }
    </div>
  )
}

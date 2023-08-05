import React from 'react'

type personListProp = {
    names: {
    first: string,
    last: string
   }[] 
}

export default function PersonList(props:personListProp) {
  return (
    <div>
     {
        props.names.map((name)=>{
            return(
                <>
                <div key={name.first}>
                    Hello <h2 style={{display:'inline'}}>{name.first} {name.last}</h2>
                </div>
                </>
            )
        })
     }
    </div>
  )
}

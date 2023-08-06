import React from 'react';
import { Name } from './Person.types';

type personListProp = {
    names: Name[] 
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

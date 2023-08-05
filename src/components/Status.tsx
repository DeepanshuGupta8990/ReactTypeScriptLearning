import React from 'react'

type StatusProp = {
    status: 'loading' | 'success' | 'error'
}

export default function Status(props:StatusProp) {
    let message;
    if(props.status === 'success'){
        message= "Data fetched successfully"
    }else if(props.status === 'loading'){
        message = 'Loading...'
    }else if(props.status === 'error'){
        message = 'Error fetching data'
    }
  return (
    <div>
      <h3>
        {
            message
        }
      </h3>
    </div>
  )
}

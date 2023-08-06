import React,{useReducer} from 'react'

type counterState = {
    count: number
}
type updateAction = {
    type:'increment' | 'decrement',
    payload:number
}
type resetAction = {
    type: "reset"
}
// type CounterAction = {
//     type: string,
//     payload: number
// }
type CounterAction = updateAction | resetAction;

const initialState = {count: 0};

function reducer(state:counterState,action:CounterAction){
    switch(action.type){
        case 'increment':
            return {count: state.count + action.payload}
        case 'decrement':
            return {count: state.count - action.payload}
        case 'reset':
            return {count: 0}
        default: 
             return state
    }
}

export default function Counter() {
    const [state,dispatch] = useReducer(reducer,initialState)
  return (
   <>
    Count: {state.count}
    <button onClick={()=>{dispatch({type:"increment",payload: 10})}}>Increment 10</button>
    <button onClick={()=>{dispatch({type:"decrement",payload: 10})}}>Decrement 10</button>
    <button onClick={()=>{dispatch({type:"reset"})}}>Reset</button>
   </>
  )
}

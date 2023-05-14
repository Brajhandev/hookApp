import React from 'react'
import { styleButtons } from '../styles/buttons'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {

const { counter, increment, decrement, reset } = useCounter(5)

console.log(counter);
  return (
    <div>
        <h1>Counter with hook:{counter}</h1>
        <hr />
        <button onClick={()=>increment(2)} className={styleButtons.succes}>+1</button>
        <button onClick={reset} className={styleButtons.danger}>Reset</button>
        <button onClick={()=>decrement(2)} disabled={counter<1} className={styleButtons.succes}>-1</button>
    </div>
  )
}

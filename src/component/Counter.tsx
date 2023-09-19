import { useState } from 'react'
import classes from './Counter.module.scss'

export default function Counter() {
  const [count, setCount] = useState(0)
  const add = () => {
    return count + 1
  }
  const min = () => {
    return count - 1
  }
  return (
    <div className={classes.btn}>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(add)
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          setCount(min)
        }}
      >
        decrement
      </button>
    </div>
  )
}

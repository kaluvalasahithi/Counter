import { useState } from "react"
import React from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    
   

  return (

    
    <>
 
    <h2 id="counter-header">Counter</h2>
    <h3>{count}</h3>
    <button id="add-btn" onClick={()=>setCount(count+1)}>+</button>
   <button id="subtract-btn"onClick={()=>setCount(count-1)}>-</button>
   <button id="double-btn" onClick={()=>setCount(count*2)}>double</button>
   </>
  )
}

export default Counter

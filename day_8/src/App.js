import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const decrement = () => {
    setCount(count - 1);
  }
  const increment = () => {
    setCount(count + 1);
  }
  const reset = () => {
    setCount(0);
  }
  console.log(count);

  return (
    <div>
      <h1 style={{ textAlign: "center", backgroundColor: "black", color: "yellow" }}> Counter App</h1>
      <div style={{ textAlign: "center" }}>
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
      </div>
      <div style={{ textAlign: "center" }}>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default App


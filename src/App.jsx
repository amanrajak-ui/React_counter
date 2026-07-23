import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [value, setValue] = useState(0)

  const increment = () => {
    setValue((prev) => prev + 1)
  }

  const decrement = () => {
    setValue((prev) => prev - 1)
  }

  const reset = () => {
    setValue(0)
  }

  return (
    <div className="app">
      <div className="card">
        <h1>Counter App</h1>
        <p className="count">{value}</p>
        <div className="buttons">
          <button className="btn btn-decrease" onClick={decrement}>
            Decrease
          </button>
          <button className="btn btn-reset" onClick={reset}>
            Reset
          </button>
          <button className="btn btn-increase" onClick={increment}>
            Increase
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
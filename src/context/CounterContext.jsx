import { createContext } from 'react'
import { useState } from 'react'

export const CounterContext = createContext({
  counter: 0,
  incrementCounter: () => {},
  decrementCounter: () => {},
})
console.log('This is a test')

export default function CounterContextProvider({ children }) {
  const [counter, setCounter] = useState(0)

  function increment() {setCounter((counter) => counter + 1)
  }

  function decrement() {setCounter((counter) => counter - 1)
  }

  const ctx = {
    counter,
    incrementCounter: increment,
    decrementCounter: decrement,
  }

  return (
    <CounterContext.Provider value={ctx}>{children}</CounterContext.Provider>
  )
}

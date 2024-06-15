import './App.css';
import Counter from './components/Counter';
import ViewNumber from './components/ViewNumber';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter((counter) => counter + 1);
  }

  function decrement() {
    setCounter((counter) => counter - 1);
  }

  return (
    <div className="App">
      <ViewNumber counter={counter}></ViewNumber>
      <Counter increment = {increment} decrement = {decrement}></Counter>
    </div>
  );
}

export default App;

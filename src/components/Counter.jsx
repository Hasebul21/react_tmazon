import { useDispatch } from 'react-redux';

export default function Counter() {
  const dispatch = useDispatch();
  const incrementCounter = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const decrementCounter = () => {
    dispatch({ type: 'DECREMENT' });
  };
  const incrementBy10 = () => {dispatch({ type: 'INCREMENT_BY_5', amount: 10 });
  };
  const togglrButton = () => {dispatch({ type: 'TOGGLE_COUNTER' });
  };
  return (
    <div>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={incrementBy10}>Increment By 10</button>
      <button onClick={togglrButton}>Toogle</button>
    </div>
  );
}

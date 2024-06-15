import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';
export default function Counter() {
    const { incrementCounter, decrementCounter } = useContext(CounterContext);
    return (
        <div>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>
        </div>
    )
}
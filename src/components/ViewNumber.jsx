import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

export default function ViewNumber() {
    const { counter } = useContext(CounterContext);
    return (
        <div>
            <h1>Hello this is {counter}</h1>
        </div>
    )
}
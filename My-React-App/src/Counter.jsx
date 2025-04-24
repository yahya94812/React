import { useState } from "react"

function Counter(){

    const [count, setCount] = useState(0);

    const decrement = ()=> setCount(count-1);
    const reset = ()=> setCount(0);
    const increment = ()=> setCount(count+1);

    return(
        <>
        <p>{count}</p>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
        <button onClick={increment}>increment</button>
        </>
    )
}

export default Counter
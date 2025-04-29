//useRef is similar to useState but not cause rerender use for interacting DOM elements
import React, {useState, useRef, useEffect} from "react"

function UseRef(){
    // const [count, setCount] = useState(0);
    const ref = useRef(0);
    const inputRef = useRef(null);

    const handelClick = () => {
        // setCount(c => c+1);
        ref.current = ref.current + 1;
        console.log(ref.current);
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    }

    useEffect(()=>{
        console.log("component rerendered!");
    })
    return(
        <>
        <button onClick={handelClick}>Click me</button>
        <input type="text" ref={inputRef} />
        </>
    )
}

export default UseRef
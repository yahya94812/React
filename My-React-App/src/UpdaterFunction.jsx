import React, {useState} from "react";
function UpdaterFunction(){
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);not work because of performance reason rect handel it differently that is count value is not update simultaneously     
        // react batched together state updates for performance reason
        setCount((count)=> count+1) // setCount pass the count arg to the callback function
        setCount((count)=> count+1)
        setCount((count)=> count+1) //by this way react put this update in the queue

    };
    return(
        <>
        <h1>Counter</h1>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        </>
    )
}
export default UpdaterFunction
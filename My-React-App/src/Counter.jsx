//useEffect hook : do some code when 
//useEffect(()=>{}) run after every rerender
//useEffect(()=>{}, []) run only at mount
//useEffect(()=>{}, [count]) run on mount + when state var count change
import React, {useState, useEffect} from "react"
function Counter(){

    const [count, setCount] = useState(0);
    const handelClick = () => setCount((c)=>c+1);

    // useEffect(()=>{
    //     // console.log(`no: ${count}`);
    //     document.title = `no: ${count}`;
    // },}//for every rerender

    // useEffect(()=>{
    //     // console.log(`no: ${count}`);
    //     document.title = `no: ${count}`;
    // },[])//for only at mount

    useEffect(()=>{
        // console.log(`no: ${count}`);
        document.title = `no: ${count}`;
    },[count])//for mount + change of count

    return(
        <>
        <p>Count: {count}</p>
        <button onClick={handelClick}>Click me</button>
        </>
    );
}

export default Counter
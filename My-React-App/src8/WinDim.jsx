import React, {useState, useEffect} from "react"
function WinDim(){

    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);

   // window.addEventListener("resize", handleResize);
    // console.log("EventListener added");//every time the component rerender the new eventListener is added with out removing older ones 

    useEffect(()=> {
        window.addEventListener("resize", handleResize);
        console.log("eventListener added using useEffect");
        return ()=>{window.removeEventListener("resize", handleResize);
            console.log("EventLister removed");
        }
    }, [])

    function handleResize(){
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }
    return(
        <>
        <p>height: {height}</p>
        <p>width: {width}</p>
        </>
    );
}

export default WinDim
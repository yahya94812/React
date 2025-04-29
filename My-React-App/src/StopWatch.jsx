import React, {useState, useEffect, useRef} from "react";
function StopWatch(){
    const [isRunning, setIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0);
    const startTimeRef = useRef(0);
    const intervalIdRef = useRef(null);

    useEffect(()=>{
        if(isRunning){
            intervalIdRef.current = setInterval(()=>{
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }
        
        return ()=>{
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning])

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now();
    }

    function stop(){
        setIsRunning(false)
    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime(){
        let minutes = Math.floor(elapsedTime/(1000*60) % 60);
        let seconds = Math.floor(elapsedTime/(1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000)/10);

        minutes = String(minutes).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");
        milliseconds = String(milliseconds).padStart(2,"0");
        

        return `${minutes}:${seconds}:${milliseconds}`
    }

    return(
        <>
        <div>{formatTime()}</div>
        <div>
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
            <button onClick={reset}>reset</button>
        </div>
        </>
    );
}

export default StopWatch
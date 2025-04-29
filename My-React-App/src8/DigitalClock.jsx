import React, {useState, useEffect} from "react";

function DigitalClock(){
    const [time, setTime] = useState(new Date);
    
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date);
        }, 1000)
        return ()=> clearInterval(intervalId)//when component unmount
    }, [])

    // setInterval(()=>{
    //     setTime(new Date);
    // }, 1000)//with out useEffect the interval is created on every rerender

    function formatTime(){
        let hour = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hour >= 12 ? "PM": "AM";
        hour = hour % 12 || 12;

        return `${padZero(hour)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`

    }

    function padZero(num){
        return (num < 10 ? "0": "")+num;
    }
    return(
        <>
        {formatTime()}
        </>
    );
}

export default DigitalClock
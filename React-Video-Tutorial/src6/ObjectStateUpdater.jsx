import React, {useState} from "react"

function ObjectStateUpdater(){

    const [car, setCar] = useState({
        year: 2025,
        make: "Maahir",
        name: "xyz"
    });
    
    const handelYearChange = (event) => {
        // setCar({...car, year : event.target.value });
        setCar((c) => (
            {...c, year: event.target.value}
        ));
    }

    const handelMakeChange = (event) => {
        setCar((c) => (
            {...c, make: event.target.value}
        ));
    }

    const handelNameChange = (event) => {
        setCar((c) => (
            {...c, name: event.target.value}
        ));
    }


    return(
        <>
        <p>Your favorite car is :{car.year} {car.make} {car.name} </p>
        <input type="number" value={car.year} onChange={handelYearChange} placeholder="Enter the year"/><br></br>
        <input type="text" value={car.make} onChange={handelMakeChange} placeholder="Enter brand name" /><br />
        <input type="text" value={car.name} onChange={handelNameChange} placeholder="Enter the name" /><br />
        </>
    )
}

export default ObjectStateUpdater
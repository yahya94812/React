import React, {useState} from "react";

function ListOfObjects(){

    const [car, setCar] = useState([{
                                year: 2025,
                                brand: "Maahir",
                                name: "Yah"
                            }]);

    const [year, setYear] = useState(new Date().getFullYear());
    const [brand, setBrand] = useState("");
    const [name, setName] = useState("");

    const handelYearChange = (event) => {
        setYear(event.target.value);
    }

    const handelBrandChange = (event) => {
        setBrand(event.target.value);
    }

    const handelNameChange = (event) => {
        setName(event.target.value);
    }

    const addCar = () =>{
        setCar((c)=>[...c, {year: year, brand: brand, name:name}]);
        setName("");
        setBrand("");
    }

    function removeCar(index){
        setCar(car.filter((_,i)=> i!==index));
    }
    return(
        <>
        <h1>List of car objects</h1>
        <ul>
            {car.map((ca, index) => <li key={index} onClick={()=> removeCar(index)}>{ca.year} {ca.brand} {ca.name} </li> )}
        </ul>
        <input type="number" value={year} onChange={handelYearChange} placeholder="Enter the year" />
        <input type="text" value={brand} onChange={handelBrandChange} placeholder="Enter the brand" />
        <input type="text" value={name} onChange={handelNameChange} placeholder="Enter the name" />
        <button onClick={addCar}>Add Car</button>
        
        </>
    );
}

export default ListOfObjects
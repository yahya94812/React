import React, {useState} from "react";

function MyComponent(){
    
    const [name, setName] = useState("Guest");
    const changeName = () => setName("yahya");

    const [age, setAge] = useState(0);
    const incrementAge = () => setAge(age+1);

    const [isEmployed, setIsEmployed] = useState(false);
    const toggleEmployedStatus = () => setIsEmployed(!isEmployed)

    
    
    return (
        <>
            <p>Name: {name}</p>
            <button onClick={changeName}>Set name</button>
            <br />
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment age</button>
            <br />
            <p>Is employed: {isEmployed ? "yes" : "no"}</p>
            <button onClick={toggleEmployedStatus}>Toggle status</button>
        </>
    );
}
export default MyComponent
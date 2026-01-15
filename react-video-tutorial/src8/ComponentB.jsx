import ComponentC from "./ComponentC"
import React, {useContext} from "react";
import { userContext } from "./ComponentA";

function ComponentB(){
    const user_from_A = useContext(userContext)
    return(
        <div className="box">
            <h1>ComponentB {user_from_A}</h1>
            <ComponentC />
        </div>
    )
}

export default ComponentB
import {useContext} from "react";
import {userContext} from "./ComponentA"

function ComponentC(){
    const user_from_A = useContext(userContext)
    return(
        <div className="box">
            <h1>ComponentC {user_from_A}</h1>

        </div>
    )
}

export default ComponentC
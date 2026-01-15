//useContext hook
//share values to the components

//provider component
//import React, {createContext} from "react";
//export const userContext = createContext();

//<userContext.Provider value={userName}>
//<Child />
//</ userContext.Provider>

//consumer component
//import React, {useContext} from "react";
//import {userContext} from "./Parent";

// const userName = useContext(userContext);


import React, {createContext, useContext} from "react";
import ComponentB from "./ComponentB";
export const userContext = createContext();
function ComponentA(props){
    const user = "yahya"
    return(
        <div className="box">
            <h1>ComponentA </h1>
            {/* the child components to where we want to share data */}
            <userContext.Provider value={user}> 
                <ComponentB /> 
            </userContext.Provider>
        </div>
    )
}

export default ComponentA
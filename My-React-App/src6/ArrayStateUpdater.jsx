import Ract, {useSate, useState} from "react";

function ArrayStateUpdater(){

    const [food, setFood] = useState(["Apple", "Banana", "Orange", "nana"]);

  
    const handelAddFood = () => {
        const addedFood = document.getElementById("foodField").value;
        // alert(addedFood);
        setFood((f)=>([...f, addedFood]));
    
    document.getElementById("foodField").value= "";
    }

    const handelListClick = (index) => {
        setFood(food.filter((_, i)=> i!== index));
    }

    return(
        <>
            <h2>List of foods</h2>
            <ul>
                {food.map((food, index)=> <li key={index} onClick={()=> handelListClick(index)}>{food}</li>)}
            </ul>
            <input type="text" placeholder="Enter the food" id="foodField" />
            <button onClick={handelAddFood}>Add Food</button>
        </>
    );
}

export default ArrayStateUpdater
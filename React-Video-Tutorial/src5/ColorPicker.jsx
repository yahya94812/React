import React, {useState} from "react";
function ColorPicker(){
    const [color, setColor] = useState("#FFFFFF");

    const handleChangeColor = (event) => setColor(event.target.value);

    return(
        <>
        <h1>Color Picker</h1>
        <div style={{backgroundColor: color, transition: 0.25}}>
            <p>selected color</p>
        </div>
        <p>select color</p>
        <input type="color" value={color} onChange={handleChangeColor} />
        </>
    );
}

export default ColorPicker
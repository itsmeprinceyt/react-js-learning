
import React, {useState} from 'react';
import './colorPickerStyle.css';
function ColorPicker(){
    const [color,setColor] = useState("#FF0000");

    function handleColorChange(event)
    {
        setColor(event.target.value)
    }

    return(<div className="mainColorPicker">
                <div class="mainColorPicker-inner">
                    <h1 className="header-title-color-picker">Color Picker</h1>
                    <p className="selected-color"style={{backgroundColor: color}}>Selected Color is: {color}</p>
                    <div class="mainColorPicker-innermost">
                        <p class="selected-a-color">Select a color: </p>
                        <input className="input-color-box" value={color} type="color" onChange={handleColorChange}/>
                    </div>
                    <h1 className="header-text"style={{color: color}}>Hey, this is a text</h1>
                </div>
        </div>);
}

export default ColorPicker;
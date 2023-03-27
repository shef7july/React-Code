import { useState } from "react";
import React from "react";
function About(){

    var [count,setCount]=useState(0);
    var [color,setColor]=useState('Red');
    function handleClick(){
      setCount(count+1)
    }
 function handleColor(){
    setColor("#"+Math.floor(Math.random()*16777215).toString(16));
 }
    return(
        <>
        <body style={{background:color}}>

        <h1> Value of count is: {count}</h1>
        <button onClick={handleClick} color={color}> Click Me</button>
        <br/>
        <h1> Color is: {color}</h1>
        <button onClick={handleColor} > Click for color</button>

        </body>
        </>
    );
}
export default About;
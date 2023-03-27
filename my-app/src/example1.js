import { useState } from "react";
function Example1(){
const [data,setData]=useState([])
const [value,setValue]=useState("");

const handleEvent=(e)=>{
    setValue([e.target.value])
}
const handleButton=()=>{
setData([...data,value])
}

return(
   <>
   <div className="container">
      <input placeholder="Enter To-Do Name" value={value} onChange={handleEvent}/>
      <button onClick={handleButton}> Add ToDo</button>
   </div>
    {data.map((el,index)=>(
        
            <h1>{index+1}.{el}</h1>
            
    ))}
    
        </>
);
}
export default Example1;
import { useState } from "react";
function Example(){
    const data=["A","B","C","D","E","F"]


return(

    data.map((el,index)=>{
        return(
            <h1> {el},{index}</h1>
        )
    })
    
    );
}
export default Example;
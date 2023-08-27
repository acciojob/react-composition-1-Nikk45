import React, { useState } from "react";

const Tabs = ({tabs})=>{

    const [active,setActive] = useState(0);

    const showResult =(index)=>{
        setActive(index)
    }

    return (
        <>
        {
            tabs.map((tab,index)=>(
                <li key={index} 
                className={`tab ${index === active ? 'active' : ''}`}
                onClick={()=>showResult(index)}>{tab.titles}</li>
            ))
        }
        <p>
            {
                tabs[active].contents
            }
        </p>
        </>
    )
}

export default Tabs
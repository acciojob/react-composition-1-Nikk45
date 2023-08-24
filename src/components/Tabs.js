import React, { useState } from "react";

const Tabs = (props)=>{

    const [result,setResult] = useState('');

    const showResult =(key)=>{
        props.tabs.map((tab)=>{
            if(tab.key === key){
                setResult(tab.contents)
            }
        })
    }

    return (
        <>
        <ul>
            
        {
            props.tabs.map((tab)=>{
                return <li key={tab.key} onClick={()=>showResult(tab.key)}>{tab.titles}</li>
            })
        }
        </ul>
        {result && result}
        </>
    )
}

export default Tabs
import React from "react";

const Tabs = (props)=>{

    const showResult =(key)=>{
        props.tabs.map((tab)=>{
            if(tab.key === key){
                props.setResult(tab.contents)
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
        </>
    )
}

export default Tabs
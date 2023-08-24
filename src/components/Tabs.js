import React from "react";

const Tabs = ({tabs,setResult})=>{

    const showResult =(key)=>{
        tabs.map((tab)=>{
            if(tab.key === key){
                setResult(tab.content)
            }
        })
    }

    return (
        <>
        <ul>
            
        {
            tabs.map((tab)=>{
                return <li key={tab.key} onClick={()=>showResult(tab.key)}>{tab.title}</li>
            })
        }
        </ul>
        </>
    )
}

export default Tabs

import React, { useState } from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

const App = () => {

  const [tabs, setTabs] = useState([{key:'1',title:"Tab 1", content:"Tab 1"},
  {key:'2',title:"Tab 2", content:"Tab 2"},{key:'3',title:"Tab 3", content:"Tab 3"}]);

  const [result,setResult] = useState('');

  return (
    <div>
        {/* Do not remove the main div */}
        
        <Tabs tabs={tabs} setResult={setResult}/>
        {result && <p>This is the content for {result}</p>}
    </div>
  )
}

export default App

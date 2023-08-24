
import React, { useState } from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

const App = () => {

  const tabs = [{key:'1',titles:"Tab 1", contents:"This is the content for Tab 1."},
  {key:'2',titles:"Tab 2", contents:"This is the content for Tab 2."},{key:'3',titles:"Tab 3", contents:"This is the content for Tab 3."}];

  const [result,setResult] = useState('');

  return (
    <div>
        {/* Do not remove the main div */}

        <Tabs tabs={tabs} setResult={setResult}/>
        {result && <p>{result}</p>}
    </div>
  )
}

export default App

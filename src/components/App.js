
import React, { useState } from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

const App = () => {

  const tabs = [
    {titles:"Tab 1", contents:"This is the content for Tab 1."},
    {titles:"Tab 2", contents:"This is the content for Tab 2."},
    {titles:"Tab 3", contents:"This is the content for Tab 3."}
  ];


  return (
    <div>
        {/* Do not remove the main div */}

        <Tabs tabs={tabs}/>
    </div>
  )
}

export default App

import React from 'react';



const Tabs=(props)=>{
 
const {tabs}=props;
// console.log(tabs)
function show(content){
document.getElementById('result').innerHTML=content;
}
    return (
        <>
     <ul>
       {tabs.map((tab)=>(
        <li key={tab.title} onClick={()=>show(tab.content)}>{tab.title}</li>
       ))}
     </ul>
      <div id="result">This is the content for Tab 1.</div>
      </>
    );
}
export default Tabs;
import React, { useState } from 'react'

const App = () => {
 const getData = () => {
   return ["one", "two", "three", "four", "five"].map(item => { return { text: item, checked: false } });
 }
 const [list, setList] = useState(getData());
 const handleCheck = (i) => {
   const newList = [...list];
   newList[i].checked = !newList[i].checked;
   setList(newList);
 }
 const handleReset = () => {
   setList(getData());
 }
 const handleDelete = () => {
   const newList = [...list].filter(c => !c.checked);
   setList(newList);
 }
 return (
   <div>
     <button onClick={handleDelete}>Delete</button>
     <button onClick={handleReset}>Reset</button>
    
     {list.map((item, index) => {
       return <div>
         <input type="checkbox" onChange={() => handleCheck(index)} checked={item.checked}></input>
         <label>{item.text}</label>
         <br/>
       </div>
     })}
   </div>
 )
}
export default App

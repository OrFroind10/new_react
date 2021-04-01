import React, { useRef } from 'react'
 
const App = () => {
  
   const btnRef = useRef()
   const txtRef = useRef()
 
   const handleClick = () => {
 
       if(btnRef.current.innerText === "edit") {
           btnRef.current.innerText = "save"
           txtRef.current.hidden = false
       }
       else {
           btnRef.current.innerText = "edit"
           txtRef.current.hidden = true
       }
   }
 
   return(
 
       <div>
           <input hidden="true" type="text" ref={txtRef}/>
           <button onClick={handleClick} ref={btnRef}>edit</button>
       </div>
   )
}
 
export default App
 

import React, {useState} from 'react'
 
const Text = (props) => {
   const [slicedText, setSlicedText] = useState(props.text.slice(0, parseInt(props.maxLength)))
   const [isSliced, setIsSliced] = useState(true)
 
   const handleClick = () => {
       setIsSliced(!isSliced)
   }
   return (
       <div>
           <h1>{isSliced ? slicedText : props.text}</h1>
           <button onClick={handleClick}>change</button>
       </div>
   )
}
 
export default Text
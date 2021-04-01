import React, {useState} from 'react'
import Text from './Text'
const App = () => {
   const [text, setText] = useState("Hello")
   const [maxLength, setMaxLength] = useState(4)
 
   return (
       <div>
           <Text maxLength={maxLength} text={text}/>
       </div>
   )
}
 
export default App
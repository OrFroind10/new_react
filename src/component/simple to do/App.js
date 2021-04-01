import React, {useState} from 'react'
import './style.css'
const App = () => {
  
   const [todos, setTodos] = useState([
       { name: "CSS", completed: true },
       { name: "JavaScript", completed: true },
       { name: "Learn React", completed: false },
       { name: "Learn mongoDB", completed: false },
       { name: "Learn Node JS", completed: false },
     ]
   )
 
 
   return (
       <div>
           {todos.map((todo, index) => (
               <div>
               <h1 className={`todo ${todo.completed}`}>{todo.name} <button onClick={() => {
                   let updatedTodos = [...todos]
                   updatedTodos[index].completed = !todo.completed
                   setTodos(updatedTodos)
               }}>{todo.completed ? "X" : "V"}</button></h1>
               </div>
           ))}
       </div>
   )
}
 
export default App

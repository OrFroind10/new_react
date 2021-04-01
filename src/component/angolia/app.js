import React, { useEffect, useState } from 'react'
import axios from 'axios'
 
const App = () => {
 
   const [sInput, setSInput] = useState()
   const [sQuery, setSQuery] = useState("hooks")
   const [results, setResults] = useState([])
   const [isLoading, setIsLoading] = useState(false)
 
   useEffect(async() => {
       setIsLoading(true)
       const {data} = await axios.get(`https://hn.algolia.com/api/v1/search?query=${sQuery}`)
       setResults(data.hits)
       setIsLoading(false)
   }, [sQuery])
 
   const handleChange = (e) => {
       setSInput(e.target.value)
   }
 
   const handleSubmit = () => {
       setSQuery(sInput)
   }
 
   if(isLoading) return (<p>Loading...</p>)
   return (
   <div>
       <label>search: </label> <input value={sInput} type="text" onChange={handleChange}/>
       <button onClick={handleSubmit}>search</button>
       {results.map(r => (<div><a href={r.url}>{r.title}</a><br/></div>))}
   </div>
   )
}
 
export default App
 

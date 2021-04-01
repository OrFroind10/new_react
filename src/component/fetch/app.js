import React, { useEffect, useState } from 'react'
import axios from 'axios'
 
const App = () => {
  
   const [movie, setMovie] = useState()
   useEffect(async () => {
       const {data} = await axios.get('https://swapi.co/api/films/1')
       setMovie({
           title: data.results.title,
           director: data.results.director
       })
   }, [])
 
   return(
       <div>
           <h1>title: {movie.title}</h1>
           <h1>director: {movie.director}</h1>
       </div>
   )
}
 
export default App

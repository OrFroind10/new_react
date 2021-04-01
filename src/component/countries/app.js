import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  
   const [countries, setCountries] = useState([])
   const [filteredCountries, setFC] = useState([...countries])
   useEffect(async () => {
       const {data} = await axios.get('https://restcountries.eu/rest/v2/all')
       setCountries(data.map(country => country.name))
       setFC(data.map(country => country.name))
   }, [])
 
   const handleSearch = (e) => {
       console.log(e.target.value)
       if(e.target.value.length < 1) {
           setFC(countries)
       }
       else {
           setFC(countries.filter(country => country.toLowerCase().includes(e.target.value)))
       }
   }
 
   return (
       <div>
           <label>search: </label><input onChange={handleSearch} type="text"/>
           {filteredCountries.map((country, index) => (
               <p key={index}>{country}</p>
           ))}
 
       </div>
   )
  
   }
export default App

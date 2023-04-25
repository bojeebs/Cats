import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from 'react'
import Catdetails from "./Catdetails"
import Catlist from "./Catlist"
import axios from "axios"


//! Component Heirarchy is a SOB. App.js>>>Main>>>Catlist>>>Catdetails
//! Biggest Challenges Api endpoints, working in a more focused manner



const Main = () => {
  const [cats, setCats] = useState ([])
  
  

  useEffect(() => {
    const url = 'https://api.thecatapi.com/v1/breeds?attach_image=1&api_key=live_o1Q9jrsGJowSnKoY9Sh1gFQdRJ23K8p6IyxstP8meoEXmsek8QMENWURdLTT6ubS'
    const getData = async () => {
    const response = await axios.get(url)
    console.log(getData)
     
    setCats(response.data)
    }
    

    getData()
  }, [])

  return (
    <div className="main">
      <Routes>
      <Route path="/" element ={<Catlist cats={cats}/>} />
      <Route path="/cats/:id" element = {<Catdetails cats={cats}/>} />
      
      
           
      
      
      
      </Routes>
    </div>
  )
}

export default Main
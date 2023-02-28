import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from 'react'
import Catdetails from "./Catdetails"
import Catlist from "./Catlist"
import axios from "axios"


//! Component Heirarchy is a SOB. App.js>>>Main>>>Catlist>>>Catdetails



const Main = () => {
  const [cats, setCats] = useState ([])
  
  

  useEffect(() => {
    const url = 'https://api.thecatapi.com/v1/breeds'
    const getData = async () => {
    const response = await axios.get(url)
       console.log(response.data)
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
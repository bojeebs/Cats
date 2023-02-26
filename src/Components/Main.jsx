import { Route, Routes } from "react-router-dom"
import Home from './Catlist'
import Data from './Data'
import Catdetails from "./Catdetails"
import Catlist from "./Catlist"


//! Component Heirarchy is a SOB. App.js>>>Main>>>Catlist>>>Catdetails



const Main = (props) => {
  return (
    <div className="main">
      <Routes>
      <Route path="/" element ={<Catlist/>} />
      <Route path="/cats/:id" element = {<Catdetails/>} />
      
      
           
      
      
      
      </Routes>
    </div>
  )
}

export default Main
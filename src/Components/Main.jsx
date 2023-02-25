import { Route, Routes } from "react-router-dom"
import Home from './Catlist'
import Data from './Data'
import Catdetails from "./Catdetails"







const Main = () => {
  return (
    <div className="main">
      <Routes>
      <Route path="/" element ={<Home/>} />
      <Route path="/cats/:catID" element = {<Catdetails/>} />
      
      
           
      
      
      
      </Routes>
    </div>
  )
}

export default Main
import { Route, Routes } from "react-router-dom"
import Home from './Home'
import Data from './Data'







const Main = () => {
  return (
    <div className="main">
      <Routes>
      <Route path="/" element ={<Home/>} />
      <Route path="/data" element={<Data/>} />
      
      
      
      
      </Routes>
    </div>
  )
}

export default Main
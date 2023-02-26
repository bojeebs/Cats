import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link, useNaviagte } from "react-router-dom"
import { BENGAL_PATH } from '../Globals'




const Catdetails = (props) => {
  return (
    <div className="detail-container">
      {/* {props.cats.map((cat, id) => (
        <div className="card" onClick={() => showCat(id)} key={id}>
        <Link to={'/cats/${cat.id}'}></Link>
        <h3>{cat.name}</h3>
        <h3>{cat.description}</h3>
        </div>
      ))} */}
     <h1>Test </h1>
    </div>
    
  )
  }

export default Catdetails



{/* {props.cat.map((cats) =>
  <div key={cats.id} className="card-detail">
  <img src={`${BENGAL_PATH}`}/>
  <h3>{cats.name}</h3>
  <h3>{cats.description}</h3>
  
  
  
  </div> */}
  {/* )} */}
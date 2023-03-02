import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'




const Catdetails = ({cats}) => { 

  
  

  let { id } = useParams()
  
 const [cat, setCat] = useState ({})
 
 

 useEffect (() => {
  
  let selectedCat = cats.find(
    (cat) => cat.id === (id)
   
  )
  
  setCat(selectedCat) 

}, [cats, id])



return cat ? (
  <div className="detail-container">
    <div className="detail">
      <h1 className="cat-title">{cat.name}</h1> 
      <h3 className="description">{cat.description}</h3>
      <h3>{cat.adaptability}</h3>
      
      <div>
      Affection Level: {[...Array(cat.affection_level)].map(() => {  
          return ( <span className="star">&#9733;</span>)})}
      </div> 
      <div>
      Energy Level: {[...Array(cat.energy_level)].map(() => {  
          return ( <span className="star">&#9733;</span>)})}
      </div> 
      <div>
      Shedding Level: {[...Array(cat.shedding_level)].map(() => {  
          return ( <span className="star">&#9733;</span>)})}
      </div> 
      <div>
      Adaptability: {[...Array(cat.adaptability)].map(() => {  
          return ( <span className="star">&#9733;</span>)})}
      </div>
      <div>
      Child Friendly: {[...Array(cat.child_friendly)].map(() => {  
          return ( <span className="star">&#9733;</span>)})}
      </div>
      <div>
      Dog Friendly: {[...Array(cat.dog_friendly)].map(() => {  
          return ( <span className="star">&#9733;</span>)})}
      </div>
      <div>
      Intelligence: {[...Array(cat.intelligence)].map(() => {  
          return ( <span className="star">&#9733;</span>)})}
      </div>
      <div>
      Suppressed Tail: {[...Array(cat.suppressed_tail)].map(() => {  
          return ( <span className="star">&#9733;</span>)})}
      </div>
      <div className="buttons">
        <a href={cat.wikipedia_url} target="_blank" rel="noreferrer">
          <button className="button">Wikipedia</button></a>
        <a href={cat.vetstreet_url} target="_blank" rel="noreferrer">
          <button className="button">Vetstreet</button></a>
      </div>
    </div>
   
  </div>
) : null
}

    
  

export default Catdetails




  

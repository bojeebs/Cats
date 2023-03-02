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
      
      {[...Array(cat.affection_level)].map((star) => {  
        return (      
             <span className="star">&#9733;</span>)})}
      <div className="buttons">
        <a href={cat.wikipedia_url} target="_blank" rel="noreferrer">
          <button className="button">Wikipedia</button>
        </a>
        <a href={cat.vetstreet_url} target="_blank" rel="noreferrer">
          <button className="button">Vetstreet</button>
        </a>
      </div>
    </div>
   
  </div>
) : null
}

    
  

export default Catdetails




  

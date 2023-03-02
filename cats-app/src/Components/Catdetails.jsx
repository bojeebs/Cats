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



  return cats ? (
        <div className="detail-container">
          <div className="detail">
         
         <h1 className="cat-title">{cat.name}</h1> 
         <h3 className="description">{cat.description}</h3>
         
          
         </div>
        </div>
      
    
  ) : null
}

    
  

export default Catdetails




  

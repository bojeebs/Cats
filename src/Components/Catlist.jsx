import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"




const Catlist = (props) => {



let navigate = useNavigate()

const showCat = (id) => {
  navigate(`/cats/${id}`)
} 


const [catprops, setCatProps] = useState([])

useEffect(() => {
  setCatProps(props.cats)
 
  
}, [props.cats.image])
// console.log(setCatProps)
console.log("line 26", props.cats)


  
    return catprops && catprops[0] ? (
      <div className="container">
        {catprops.map(cat => (
          <div className="img-wrapper">
            <div className="cat-card" onClick={() => showCat(cat.id)} key={cat.id}>
              {/* <div className="caption-container"> */}
                <h2 className="img-caption">{cat.name}</h2>
              {/* </div> */}
              {cat.image ? <img className="cat-img" alt="cat" src= {cat.image.url} /> : null}
              
            </div>
          </div>

          
        ))}

      </div>
    ) : <h1>Loading</h1>
        }
export default Catlist

//  
 


          
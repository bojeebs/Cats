import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



const Catdetails = ({cats}) => { 

  

  let { id } = useParams()
  
 const [cat, setCat] = useState ({})
 
 

 useEffect (() => {
  // console.log(id)
  let selectedCat = cats.find(
    (cat) => cat.id === (id)
   
  )
  // console.log(selectedCat)
  setCat(selectedCat)

}, [cats, id])



  return cats ? (
        <div className="detail">
         <button>Back To Home Page!</button>
         <h3>{cat.name}</h3> 
         <h3>{cat.description}</h3>
         
          
          
        </div>
      
    
  ) : null
}

    
  

export default Catdetails




  
  
  {/* )} */}


  // <div className="container">
  //         {props.cats.map((cat, id) => (
  //           <div className="img-container" onClick={() => showCat(cat)} key={cat.id}>
  //             <div className="img-wrapper">
  //             <img className="cat-img" src={cat.url} alt="A cute cat" />
  //             <p className="img-caption">Bengal</p>
  //           </div>
  //           </div>
            
  //       ))}
  //     </div>

  // useEffect (() => {
//   const getData = async () => {
//     const response = await axios.get(`${BASE_URL}/search?breed_id=${id}`)
//     console.log(response)
//     setCats(response.data)
//   }

//   getData()
// }, [])
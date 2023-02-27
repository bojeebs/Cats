import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react'
import { API_KEY } from '../Globals'
import { BASE_URL } from '../Globals'

const Catdetails = (props) => { 

  

  let { id } = useParams()
  
 const [cat, setCat] = useState ({})
 
 


useEffect (() => {
  const getData = async () => {
    const response = await axios.get(`${BASE_URL}/search?breed_id=${id}`)
    console.log(response)
    setCat(response.data)
  }

  getData()
}, [])

//  useEffect (() => {
//   let selectedCat = props.cats.find(
//     (cat) => cat.id === parseInt(id)
//   )
//   setCat(selectedCat)

// }, [props.cats, id])



  return (
    <div>
      
        <div key={cat.id}>
          <h3>{cat.name}</h3>
          <p>Description: {cat.description}</p>
          <p>Adaptability: {cat.adaptability}</p>
        </div>
      
    </div>
  );
};

    
  

export default Catdetails



{/* {props.cat.map((cats) =>
  <div key={cats.id} className="card-detail">
  <img src={`${BENGAL_PATH}`}/>
  <h3>{cats.name}</h3>
  <h3>{cats.description}</h3>
  
  
  
  </div> */}
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
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Catdetails = (props) => {


// const [cat, setCat] = useState ('')


// let { id } = useParams()

// useEffect (() => {
//   let selectedCat = props.cats.find(
//     (cat) => cat.id === parseInt(id)
//   )
//   setCat(selectedCat)

// }, [props.cats, id])



  return (
    <div className="detail-container">
     
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
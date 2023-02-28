import { useNavigate } from "react-router-dom"




const Catlist = ({cats}) => {



let navigate = useNavigate()

const showCat = (id) => {
  navigate(`/cats/${id}`)

}





  // const [cats, setCats] = useState ([])
  
  

  // useEffect(() => {
  //   const url = 'https://api.thecatapi.com/v1/breeds'
  //   const getData = async () => {
  //   const response = await axios.get(url)
  //      console.log(response.data)
  //   setCats(response.data)
  //   }
    

  //   getData()
  // }, [])
  
  console.log(cats)

    if (cats) {

      return (
          <div className="container">
                {cats.map(cat => (
                  <div className="cat-card" onClick={() => showCat(cat.id)} key={cat.id}>
                <h2>{cat.name}</h2>
                </div>
              ))}
            
          </div>
        )
      } else {
        return <h1>loading please wait</h1>
      }
    }
export default Catlist




 // <div className="card" onClick={() => showCat(id)} key={id}>
            //   <Link to={`/cats/${cat.id}`}></Link>
            //         <h3>{cat.name}</h3>


 {/* <div className="img-container" onClick={() => showCat(cat.id)} key={cat.id} >
            <div className="img-wrapper">
            <img className="cat-img" src={cat.url} />
            <p className="img-caption">Bengal</p>
            </div>
          </div>
          <div className="img-container">
            <div className="img-wrapper">
              <img className="cat-img" src={catone.url} />
              <p className="img-caption">Maine Coon</p>
            </div>
          </div>
          <div className="img-container">
            <div className="img-wrapper">
              <img className="cat-img" src={catTwo.url} />
              <p className="img-caption">Persian</p>
            </div>
          </div> */}
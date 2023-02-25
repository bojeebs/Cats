import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const Home = () => {

  const [cat, setCat] = useState ([])
  const [catone, setCatOne] = useState ([])
  const [catTwo, setCatTwo] = useState ([])

  useEffect(() => {
    const url = 'https://api.thecatapi.com/v1/images/search?breed_ids=beng'
    const getData = async () => {
        const response = await axios.get(url)
        console.log(response.data)
        setCat(response.data[0])
    }
    

    getData()
  }, [])
      useEffect(() => {
        const url = 'https://api.thecatapi.com/v1/images/search?breed_ids=mcoo'
        const getDataOne = async () => {
            const response = await axios.get(url)
            console.log(response.data[0])
            setCatOne(response.data[0])
        }
        

        getDataOne()
      }, [])
      useEffect(() => {
        const url = 'https://api.thecatapi.com/v1/images/search?breed_ids=pers'
        const getDataTwo = async () => {
            const response = await axios.get(url)
            console.log(response.data[0])
            setCatTwo(response.data[0])
        }
        

        getDataTwo()
      }, [])
  

    
      return (
        <div className="container">
          <div className="img-container">
            <div className="img-wrapper">
            <Link to={`/cats/${cat.id}`}>
              <img className="cat-img" src={cat.url} />
            </Link>
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
          </div>
        </div>
      );
      
      }

export default Home
import { useState, useEffect } from 'react'
import axios from 'axios'



const Data = () => {

  const [fish, setFish] = useState ({})

  useEffect(() => {
    const url = 'https://meowfacts.herokuapp.com/'
    const getData = async () => {
        const response = await axios.get(url)
        
        setFish(response.data)
    }


    getData()
  }, [])
  console.log(fish)
  

    return (
      <div>
      <h2> Hello World</h2>
      <h2> {fish.data}</h2>
      </div>
    )
  }


export default Data
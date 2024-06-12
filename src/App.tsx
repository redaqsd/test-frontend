import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [data, setData] = useState<any>([])
  useEffect(() => {
    async function fetchData (){
      const fetch = await axios.get('http://localhost:3000/test')
      setData(fetch.data.tests)
    }

    fetchData()
  }, [])

  console.log(data)

  return (
    <div>
      {data.map((elem : any) => {
        return <div key={elem._id}>
          <h1 key={elem.name}> {elem.name} </h1>
          <h1 key={elem._id}> {elem._id} </h1>
        </div>
      })}
    </div>
  )
}

export default App

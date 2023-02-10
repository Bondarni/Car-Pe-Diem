import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Form from './components/Form'

const App = () => {
  const [thing, setThing] = useState('')

  const getThing = async () => {
    try {
      let res = await axios.get('http://localhost:3001/<thing>')
      setThing(res.data)
    } catch (error) {
      console.log(err)
    }
  }

  useEffect(() => {
    getThing()
  }, [])

  return (
    <div className="App">
      <Form />
    </div>
  )
}

export default App

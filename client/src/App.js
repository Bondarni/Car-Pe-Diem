import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Vehicle from './components/Vehicle'
import Home from './components/Home'
import Nav from './components/Nav'
// import NewVehicle from './components/NewVehicle'

const App = () => {
  const [vehicles, setVehicles] = useState([])
  // const [NewVehicle, setNewVehicle] = useState({
  //   id: '',
  //   imageURL: '',
  //   name: '',
  //   year: '',
  //   make: '',
  //   model: '',
  //   color: '',
  //   mileage: '',
  //   fuel: '',
  //   features: ['']
  // })

  const getVehicles = async () => {
    try {
      let res = await axios.get('http://localhost:3001/api/vehicle')
      setVehicles(res.data.vehicles)
    } catch (error) {
      // console.log(error)
    }
  }

  useEffect(() => {
    getVehicles()
  }, [])

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicle" element={<Vehicle vehicles={vehicles} />} />
        {/* <Route path="/newvehicle" element={<NewVehicle />} /> */}
        {/* <Route
          path="/Vehicle/:id"
          element={<VehicleDetails vehicles={vehicles} />}
        /> */}
      </Routes>
    </div>
  )
}

export default App

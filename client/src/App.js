import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Vehicle from './components/Vehicle'
import Home from './components/Home'
import Nav from './components/Nav'
import NewVehicle from './components/NewVehicle'
import VehicleDeets from './components/VehicleDeets'
import NewReview from './components/NewReview'

const App = () => {
  const [vehicles, setVehicles] = useState([])
  const getVehicles = async () => {
    try {
      let res = await axios.get('http://localhost:3001/api/vehicle')
      setVehicles(res.data.vehicles)
    } catch (error) {
      console.log(error)
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
        <Route
          path="/vehicle/:id/:index"
          element={<VehicleDeets vehicles={vehicles} />}
        />
        <Route
          path="/vehicle/newvehicle"
          element={<NewVehicle vehicles={vehicles} setVehicles={setVehicles} />}
        />
        <Route path="/newreview" element={<NewReview />} />
      </Routes>
    </div>
  )
}

export default App

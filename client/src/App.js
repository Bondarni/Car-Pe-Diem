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
  const [reviews, setReviews] = useState([])

  const getVehicles = async () => {
    try {
      let res = await axios.get('http://localhost:3001/api/vehicle')
      setVehicles(res.data.vehicles)
    } catch (error) {
      console.log(error)
    }
  }
  const getReviews = async () => {
    try {
      let res = await axios.get('http://localhost:3001/api/review')
      setReviews(res.data.reviews)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getVehicles()
    getReviews()
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
          path="/vehicle/:id}"
          element={<VehicleDeets vehicles={vehicles} />}
        />
        <Route
          path="/vehicle/newvehicle"
          element={<NewVehicle vehicles={vehicles} setVehicles={setVehicles} />}
        />
        <Route
          path="/newreview"
          element={<NewReview reviews={reviews} setReviews={setReviews} />}
        />
      </Routes>
    </div>
  )
}

export default App

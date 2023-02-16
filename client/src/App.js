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
import UpdateVehicle from './components/UpdateVehicle'

const App = () => {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicle" element={<Vehicle />} />
        <Route path="/vehicle/:id/:index" element={<VehicleDeets />} />
        <Route path="/vehicle/:id/:index/update" element={<UpdateVehicle />} />
        <Route path="/vehicle/newvehicle" element={<NewVehicle />} />
        <Route path="/newreview" element={<NewReview />} />
      </Routes>
    </div>
  )
}

export default App

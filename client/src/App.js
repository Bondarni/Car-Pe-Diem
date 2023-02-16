import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Vehicle from './components/Vehicle'
import Home from './components/Home'
import About from './components/About'
import NewVehicle from './components/NewVehicle'
import VehicleDeets from './components/VehicleDeets'
import NewReview from './components/NewReview'
import UpdateVehicle from './components/UpdateVehicle'

const App = () => {
  let navigate = useNavigate()
  const backHome = () => {
    navigate('/vehicle')
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vehicle" element={<Vehicle />} />
        <Route
          path="/vehicle/:id/:index"
          element={<VehicleDeets backHome={backHome} />}
        />
        <Route path="/vehicle/:id/:index/update" element={<UpdateVehicle />} />
        <Route
          path="/vehicle/newvehicle"
          element={<NewVehicle backHome={backHome} />}
        />
        <Route path="/newreview" element={<NewReview />} />
      </Routes>
    </div>
  )
}

export default App

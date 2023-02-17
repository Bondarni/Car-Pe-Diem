import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import NewVehicle from './NewVehicle'
import Nav from './Nav'

const Vehicle = () => {
  const [vehicles, setVehicles] = useState([])
  const [newThing, setNewThing] = useState(false)
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
    <div>
      <Nav />
      {newThing ? (
        <NewVehicle
          vehicles={vehicles}
          setVehicles={setVehicles}
          getVehicles={getVehicles}
          setNewThing={setNewThing}
        />
      ) : (
        <button onClick={() => setNewThing(true)}>Add New Vehicle</button>
      )}
      <br></br>
      {/* <NewVehicle
        vehicles={vehicles}
        setVehicles={setVehicles}
        getVehicles={getVehicles}
      /> */}
      {vehicles.map((vehicle, index) => (
        <Link to={`/vehicle/${vehicle._id}/${index}`} key={vehicle._id}>
          <img src={vehicle.imageURL} alt={vehicle.name} className="carpic" />
          <h1>{vehicle.name}</h1>
        </Link>
      ))}
    </div>
  )
}

export default Vehicle

import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Vehicle = () => {
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
    <div>
      {vehicles.map((vehicle, index) => (
        <Link to={`/vehicle/${vehicle._id}/${index}`} key={vehicle._id}>
          <img src={vehicle.imageURL} alt={vehicle.name} className="carpic" />
          <h3>{vehicle.name}</h3>
        </Link>
      ))}
    </div>
  )
}

export default Vehicle

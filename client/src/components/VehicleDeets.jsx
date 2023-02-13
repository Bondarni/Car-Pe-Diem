import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const VehicleDeets = ({ vehicles }) => {
  const [vehicleDeets, setVehicleDeets] = useState({})
  console.log(vehicles)
  let { id } = useParams()

  useEffect(() => {
    let isCancelled = false
    const getVehicleDeets = async () => {
      const res = await axios.get('http://localhost:3001/api/vehicle/:id')
      if (!isCancelled) {
        setVehicleDeets(res.data)
      }
    }
    getVehicleDeets()
    return () => {
      isCancelled = true
    }
  }, [id])
  return (
    <div>
      <div>{vehicleDeets.name}</div>
    </div>
  )
}
export default VehicleDeets

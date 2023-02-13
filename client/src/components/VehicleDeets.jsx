import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Reviews from './Reviews'

const VehicleDeets = ({ vehicles }) => {
  const [reviews, setReviews] = useState([])

  let { index } = useParams()

  const getReviews = async () => {
    try {
      let res = await axios.get(
        `http://localhost:3001/api/vehicle/${vehicles[index]._id}/reviews`
      )
      setReviews(res.data.reviews)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getReviews()
  }, [])

  return (
    <div>
      <img src={vehicles[index].imageURL} />
      <div>{vehicles[index].name}</div>
      <div>
        {vehicles[index].year} {vehicles[index].make} {vehicles[index].model}
      </div>
      <div>{vehicles[index].color}</div>
      <div>{vehicles[index].mileage}</div>
      <div>{vehicles[index].fuel}</div>
      <div>{vehicles[index].features}</div>
      <div>
        <Reviews />
      </div>
    </div>
  )
}
export default VehicleDeets

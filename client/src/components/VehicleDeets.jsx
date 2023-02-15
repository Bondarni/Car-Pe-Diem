import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import NewReview from './NewReview'
import Reviews from './Reviews'

const VehicleDeets = ({ vehicles }) => {
  const [reviews, setReviews] = useState()

  const deleteVehicle = async () => {
    try {
      let res = await axios.delete(
        `http://localhost:3001/api/vehicle/${vehicles[index]._id}`
      )
    } catch (error) {
      console.log(error)
    }
  }

  const deleteReview = async () => {
    try {
      let res = await axios.delete(
        `http://localhost:3001/api/vehicle/${vehicles[index]._id}/reviews/${reviews[index]._id}`
      )
      setReviews(res.data.reviews)
    } catch (error) {
      console.log(error)
    }
  }

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

  let { index } = useParams()
  return (
    <>
      {vehicles.length ? (
        <div>
          <img src={vehicles[index].imageURL} alt={vehicles[index].name} />
          <div>{vehicles[index].name}</div>
          <div>
            {vehicles[index].year} {vehicles[index].make}{' '}
            {vehicles[index].model}
          </div>
          <div>{vehicles[index].color}</div>
          <div>{vehicles[index].mileage}</div>
          <div>{vehicles[index].fuel}</div>
          <div>{vehicles[index].features}</div>
          <Reviews
            vehicles={vehicles}
            VehicleDeets={VehicleDeets}
            reviews={reviews}
            deleteReview={deleteReview}
          />
          <NewReview
            vehicles={vehicles}
            reviews={reviews}
            setReviews={setReviews}
          />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  )
}
export default VehicleDeets

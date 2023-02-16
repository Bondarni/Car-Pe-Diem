import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import NewReview from './NewReview'
import Reviews from './Reviews'
import UpdateVehicle from './UpdateVehicle'

const VehicleDeets = () => {
  const [vehicles, setVehicles] = useState([])
  const [reviews, setReviews] = useState()

  const getVehicles = async () => {
    try {
      let res = await axios.get('http://localhost:3001/api/vehicle')
      setVehicles(res.data.vehicles)
    } catch (error) {
      console.log(error)
    }
  }

  let navigate = useNavigate()
  let { id, index } = useParams()

  const backHome = () => {
    navigate('/vehicle')
  }
  const toUpdatePage = () => {
    navigate(`/vehicle/${vehicles[index]._id}/${vehicles[index].index}`)
  }
  // const deleteReview = async () => {
  //   try {
  //     let res = await axios.delete(
  //       `http://localhost:3001/api/vehicle/${id}/reviews/${reviewId}`
  //     )
  //     setReviews(res.data.reviews)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const deleteVehicle = async () => {
    try {
      let res = await axios.delete(
        `http://localhost:3001/api/vehicle/${vehicles[index]._id}`
      )
      setVehicles(res.data.vehicles)
      backHome()
    } catch (error) {
      console.log(error)
    }
  }

  const getReviews = async () => {
    try {
      let res = await axios.get(
        `http://localhost:3001/api/vehicle/${id}/reviews`
      )
      setReviews(res.data.reviews)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getReviews()
    getVehicles()
  }, [])

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
          <button onClick={deleteVehicle}>Scrap Vehicle</button>
          <button onClick={toUpdatePage}>Update</button>
          <UpdateVehicle vehicle={vehicles[index]} getVehicles={getVehicles} />
          <Reviews
            reviews={reviews}
            getReviews={getReviews}
            backHome={backHome}
          />
          <NewReview
            vehicles={vehicles}
            reviews={reviews}
            getReviews={getReviews}
          />
        </div>
      ) : (
        <div>Your Garage Is Empty</div>
      )}
    </>
  )
}
export default VehicleDeets

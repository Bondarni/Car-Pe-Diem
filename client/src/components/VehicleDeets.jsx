import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import NewReview from './NewReview'
import Reviews from './Reviews'
import UpdateVehicle from './UpdateVehicle'
import Nav from './Nav'
const VehicleDeets = ({ backHome }) => {
  const [vehicles, setVehicles] = useState([])
  const [reviews, setReviews] = useState([])
  let { id, index } = useParams()
  const getVehicles = async () => {
    try {
      let res = await axios.get('http://localhost:3001/api/vehicle')
      setVehicles(res.data.vehicles)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteVehicle = async () => {
    try {
      let res = await axios.delete(
        `http://localhost:3001/api/vehicle/${vehicles[index]._id}`
      )
      setVehicles(res.data.vehicles)
      alert('Vehicle Scrapped')
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

  const [updates, setUpdates] = useState(false)

  useEffect(() => {
    getReviews()
    getVehicles()
  }, [])

  return (
    <div className="vehicledeetssection">
      <Nav />
      {vehicles.length ? (
        <div>
          <img
            className="carpic"
            src={vehicles[index].imageURL}
            alt={vehicles[index].name}
          />
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
          {updates ? (
            <UpdateVehicle
              vehicle={vehicles[index]}
              getVehicles={getVehicles}
              setUpdates={setUpdates}
            />
          ) : (
            <button onClick={() => setUpdates(true)}>Update</button>
          )}
          <Reviews reviews={reviews} setReviews={setReviews} />
          <NewReview
            vehicles={vehicles}
            reviews={reviews}
            getReviews={getReviews}
          />
        </div>
      ) : (
        <div>Your Garage Is Empty</div>
      )}
    </div>
  )
}
export default VehicleDeets

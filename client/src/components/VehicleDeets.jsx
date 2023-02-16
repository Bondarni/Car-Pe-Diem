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
  // let vehicle = vehicles[index]
  // const [isShowing, toggleShowing] = useState(false)
  // const showUp = () => toggleShowing(true)
  // const goAway = () => toggleShowing(false)
  // let updateSection
  // if (isShowing) {
  //   updateSection = (
  //     <UpdateVehicle
  //       vehicle={vehicle}
  //       setVehicles={setVehicles}
  //       goAway={goAway}
  //     />
  //   )
  // } else {
  //   updateSection = <button onClick={showUp}>Update</button>
  // }

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

  useEffect(() => {
    getReviews()
    getVehicles()
  }, [])

  return (
    <>
      <Nav />
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
          {/* {updateSection} */}
          {/* <button onClick={showUp}>Update</button> */}
          <UpdateVehicle vehicle={vehicles[index]} getVehicles={getVehicles} />
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
    </>
  )
}
export default VehicleDeets

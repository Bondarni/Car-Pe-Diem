import axios from 'axios'
import { useState } from 'react'

const UpdateVehicle = ({ vehicle, getVehicles }) => {
  const [formState, setFormState] = useState(vehicle)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let res = await axios.put(
      `http://localhost:3001/api/vehicle/${vehicle._id}`,
      formState
    )
    getVehicles()
  }

  return (
    <div>
      <h3>Enter Updated Info Below:</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="imageURL">Image URL:</label>
        <input
          id="imageURL"
          type="text"
          onChange={handleChange}
          value={formState.imageURL}
        />
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          onChange={handleChange}
          value={formState.name}
        />
        <label htmlFor="year">Year:</label>
        <input
          id="year"
          type="number"
          onChange={handleChange}
          value={formState.year}
        />
        <label htmlFor="make">Make:</label>
        <input
          id="make"
          type="text"
          onChange={handleChange}
          value={formState.make}
        />
        <label htmlFor="model">Model:</label>
        <input
          id="model"
          type="text"
          onChange={handleChange}
          value={formState.model}
        />
        <label htmlFor="color">Color:</label>
        <input
          id="color"
          type="text"
          onChange={handleChange}
          value={formState.color}
        />
        <label htmlFor="mileage">Mileage:</label>
        <input
          id="mileage"
          type="number"
          onChange={handleChange}
          value={formState.mileage}
        />
        <label htmlFor="fuel">Fuel:</label>
        <input
          id="fuel"
          type="text"
          onChange={handleChange}
          value={formState.fuel}
        />
        <label htmlFor="features">Features:</label>
        <input
          id="features"
          type="text"
          onChange={handleChange}
          value={formState.features}
        />
        <button type="submit">Update Vehicle Details</button>
      </form>
    </div>
  )
}

export default UpdateVehicle

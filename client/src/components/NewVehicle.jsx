import axios from 'axios'
import { useState } from 'react'

const NewVehicle = ({ vehicles, setVehicles, getVehicles }) => {
  const initialState = {
    imageURL: '',
    name: '',
    year: '',
    make: '',
    model: '',
    color: '',
    mileage: '',
    fuel: '',
    features: ''
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let response = await axios.post(
      'http://localhost:3001/api/vehicle',
      formState
    )
    let vehicleArray = [...vehicles]
    vehicleArray.push(response.data.vehicle)
    setVehicles(vehicleArray)
    setFormState(initialState)
  }

  return (
    <div>
      <h3>Add A New Vehicle</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="imageURL">Image URL:</label>
        <input
          id="imageURL"
          type="text"
          placeholder="thing"
          onChange={handleChange}
          value={formState.imageURL}
        />
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          placeholder="thing"
          onChange={handleChange}
          value={formState.name}
        />
        <label htmlFor="year">Year:</label>
        <input
          id="year"
          type="number"
          placeholder="thing"
          onChange={handleChange}
          value={formState.year}
        />
        <label htmlFor="make">Make:</label>
        <input
          id="make"
          type="text"
          placeholder="thing"
          onChange={handleChange}
          value={formState.make}
        />
        <label htmlFor="model">Model:</label>
        <input
          id="model"
          type="text"
          placeholder="thing"
          onChange={handleChange}
          value={formState.model}
        />
        <label htmlFor="color">Color:</label>
        <input
          id="color"
          type="text"
          placeholder="thing"
          onChange={handleChange}
          value={formState.color}
        />
        <label htmlFor="mileage">Mileage:</label>
        <input
          id="mileage"
          type="number"
          placeholder="thing"
          onChange={handleChange}
          value={formState.mileage}
        />
        <label htmlFor="fuel">Fuel:</label>
        <input
          id="fuel"
          type="text"
          placeholder="thing"
          onChange={handleChange}
          value={formState.fuel}
        />
        <label htmlFor="features">Features:</label>
        <input
          id="features"
          type="text"
          placeholder="thing"
          onChange={handleChange}
          value={formState.features}
        />
        <button type="submit" onClick={getVehicles}>
          Add
        </button>
      </form>
    </div>
  )
}

export default NewVehicle

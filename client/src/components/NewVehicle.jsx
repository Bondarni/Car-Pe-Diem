import axios from 'axios'
import { useState } from 'react'

const NewVehicle = (props) => {
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
    await axios.post('http://localhost:3001/api/vehicle', formState)
    let vehicleArray = [...props.vehicles]
    vehicleArray.push(formState)
    props.setVehicles(vehicleArray)
    setFormState(initialState)
  }

  return (
    <div>
      <h1>Add A New Vehicle</h1>
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
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default NewVehicle

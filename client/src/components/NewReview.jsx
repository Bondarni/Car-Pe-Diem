import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const NewReview = ({ vehicles, getReviews, reviews }) => {
  let { index } = useParams()
  const initialState = {
    vehicleId: `${vehicles[index]._id}`,
    part: '',
    description: '',
    shop: '',
    cost: ''
  }

  const [formState, setFormState] = useState(initialState)
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let response = await axios.post(
      `http://localhost:3001/api/vehicle/${vehicles[index]._id}/reviews`,
      formState
    )
    let reviewArray = [...reviews]
    reviewArray.push(response.data.review)
    getReviews()
    setFormState(initialState)
  }

  return (
    <div>
      <h4>Add To Maintenance Log:</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="part">Part:</label>
        <input
          id="part"
          type="text"
          onChange={handleChange}
          value={formState.part}
        />
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          onChange={handleChange}
          value={formState.description}
        />
        <label htmlFor="shop">Shop:</label>
        <input
          id="shop"
          type="text"
          onChange={handleChange}
          value={formState.shop}
        />
        <label htmlFor="cost">Cost:</label>
        <input
          id="cost"
          type="number"
          onChange={handleChange}
          value={formState.cost}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}
export default NewReview

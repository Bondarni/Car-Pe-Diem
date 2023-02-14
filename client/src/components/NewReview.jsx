import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const NewReview = ({ vehicles, setReviews, reviews }) => {
  let { index } = useParams()
  const initialState = {
    vehicleId: `${vehicles[index]._id}`,
    subject: '',
    body: '',
    rating: ''
  }

  const [formState, setFormState] = useState(initialState)
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(
      `http://localhost:3001/api/vehicle/${vehicles[index]._id}/reviews`,
      formState
    )
    let reviewArray = [...reviews]
    reviewArray.push(formState)
    setReviews(reviewArray)
    setFormState(initialState)
  }

  return (
    <div>
      <h3>Add A New Review</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="subject">Subject:</label>
        <input
          id="subject"
          type="text"
          onChange={handleChange}
          value={formState.subject}
        />
        <label htmlFor="body">Body:</label>
        <input
          id="body"
          type="text"
          onChange={handleChange}
          value={formState.body}
        />
        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          type="number"
          onChange={handleChange}
          value={formState.rating}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}
export default NewReview

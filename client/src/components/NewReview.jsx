import { useState } from 'react'
import axios from 'axios'

const NewReview = (props) => {
  const initialState = {
    vehicleId: '',
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
    await axios.post('http://localhost:3001/api/review', formState)
    let reviewArray = [...props.reviews]
    reviewArray.push(formState)
    props.setReviews(reviewArray)
    setFormState(initialState)
  }

  return (
    <div>
      <h1>Add A New Review</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="vehicleId">Vehcile ID:</label>
        <input
          id="vehicleId"
          type="text"
          onChange={handleChange}
          value={formState.vehicleId}
        />
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

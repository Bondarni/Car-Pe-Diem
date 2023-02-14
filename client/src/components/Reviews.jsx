import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Reviews = ({ vehicles }) => {
  const [reviews, setReviews] = useState()

  let { index } = useParams()

  const [select, setSelect] = useState(false)

  const getReviews = async () => {
    try {
      let res = await axios.get(
        `http://localhost:3001/api/vehicle/${vehicles[index]._id}/reviews`
      )
      console.log(res.data.reviews)
      setReviews(res.data.reviews)
      // setSelect(true)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getReviews()
  }, [])
  return (
    <div>
      <div>Here be the reviews</div>
      <div>
        {reviews?.map((review, index) => (
          <div key={review._id}>
            <div>{review.subject}</div>
            <div>{review.body}</div>
            <div>{review.rating}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Reviews

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Reviews = ({ reviews, getReviews, backHome }) => {
  const navigate = useNavigate()
  // const reBoot = () => {
  //   navigate (`/vehicle/${id}/`)
  // }

  const deleteReview = async (vehicleId, reviewId) => {
    try {
      let res = await axios.delete(
        `http://localhost:3001/api/vehicle/${vehicleId}/reviews/${reviewId}`
      )
      // getReviews()
      backHome()
    } catch (error) {
      console.log(error)
    }
  }
  console.log(reviews)
  return (
    <>
      {reviews ? (
        <div>
          <div>Here are the reviews:</div>
          {reviews?.map((review, index) => (
            <div key={index}>
              <div>{review.subject}</div>
              <div>{review.body}</div>
              <div>{review.rating}</div>
              <button
                onClick={() => deleteReview(review.vehicleId, review._id)}
              >
                Delete Review
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>No Reviews Yet</div>
      )}
    </>
  )
}
export default Reviews

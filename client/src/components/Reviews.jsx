import axios from 'axios'

const Reviews = ({ reviews, setReviews }) => {
  const deleteReview = async (vehicleId, reviewId, index) => {
    try {
      await axios.delete(
        `http://localhost:3001/api/vehicle/${vehicleId}/reviews/${reviewId}`
      )
      let reviewsArray = [...reviews]
      reviewsArray.splice(index, 1)
      setReviews(reviewsArray)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {reviews.length ? (
        <div>
          <h3>Maintenace Log:</h3>
          {reviews?.map((review, index) => (
            <div key={index}>
              <div>{review.part}</div>
              <div>{review.description}</div>
              <div>{review.shop}</div>
              <div>{review.cost}</div>
              <button
                onClick={() =>
                  deleteReview(review.vehicleId, review._id, index)
                }
              >
                Delete Maintenace Record
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>No Records Yet</div>
      )}
    </>
  )
}
export default Reviews

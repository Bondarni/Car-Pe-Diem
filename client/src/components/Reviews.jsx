const Reviews = ({ vehicles, reviews, deleteReview }) => {
  return (
    <>
      {reviews ? (
        <div>
          <div>Here are the reviews:</div>
          {reviews?.map((review, index) => (
            <div key={review._id}>
              <div>{review.subject}</div>
              <div>{review.body}</div>
              <div>{review.rating}</div>
              <button onClick={deleteReview}>Delete Review</button>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  )
}
export default Reviews

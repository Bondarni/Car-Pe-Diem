const Reviews = ({ vehicles, reviews }) => {
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

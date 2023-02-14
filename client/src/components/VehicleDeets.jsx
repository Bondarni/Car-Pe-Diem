import { useParams } from 'react-router-dom'
import NewReview from './NewReview'
import Reviews from './Reviews'

const VehicleDeets = ({ vehicles }) => {
  let { index } = useParams()

  return (
    <>
      {vehicles.length ? (
        <div>
          <img src={vehicles[index].imageURL} alt={vehicles[index].name} />
          <div>{vehicles[index].name}</div>
          <div>
            {vehicles[index].year} {vehicles[index].make}{' '}
            {vehicles[index].model}
          </div>
          <div>{vehicles[index].color}</div>
          <div>{vehicles[index].mileage}</div>
          <div>{vehicles[index].fuel}</div>
          <div>{vehicles[index].features}</div>
          <Reviews vehicles={vehicles} />
          <NewReview />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  )
}
export default VehicleDeets

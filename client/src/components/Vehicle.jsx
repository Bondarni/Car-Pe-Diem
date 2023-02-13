import { Link } from 'react-router-dom'

const Vehicle = ({ vehicles, getVehicleDeets }) => {
  return (
    <div>
      <Link to="/vehicle/newvehicle">Add New Vehicle</Link>
      {vehicles.map((vehicle) => (
        <Link to={`/vehicle/${vehicle._id}`} key={vehicle._id}>
          <img src={vehicle.imageURL} alt={vehicle.name} className="carpic" />
          <h3>{vehicle.name}</h3>
          <Link>Delete Vehicle</Link>
        </Link>
      ))}
    </div>
  )
}

export default Vehicle

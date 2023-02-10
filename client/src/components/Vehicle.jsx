const Vehicle = ({ vehicles }) => {
  console.log(vehicles)
  const displayVehicles = vehicles.map((vehicle) => {
    return (
      <div key={vehicle._id}>
        <img
          src={vehicle.imageURL}
          alt={vehicle.name} /*onClick={handleChange}*/
        />
        <h3>{vehicle.name}</h3>
      </div>
    )
  })
  return displayVehicles
}

export default Vehicle

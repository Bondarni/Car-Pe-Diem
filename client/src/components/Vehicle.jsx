const Vehicle = ({ vehicles }) => {
  console.log(vehicles)
  const displayVehicles = vehicles.map((vehicle) => {
    return (
      <div>
        <img src={vehicle.imageURL} alt={vehicle.name} />
        <h3>{vehicle.name}</h3>
      </div>
    )
  })
  return displayVehicles
}

export default Vehicle

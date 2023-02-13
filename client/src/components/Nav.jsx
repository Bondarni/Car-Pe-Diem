import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <h4>Vroom For Two</h4>
      <div>
        <NavLink to="/">Home</NavLink>
        <br></br>
        <NavLink to="/vehicle">Vehicles</NavLink>
        <br></br>
        <NavLink to="/vehicle/newvehicle">Add New Vehicle</NavLink>
        <br></br>
        <NavLink to="/newreview">Add Review</NavLink>
      </div>
    </nav>
  )
}

export default Nav

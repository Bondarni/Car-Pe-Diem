import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <p>Car-Pe Diem</p>
      <NavLink to="/">Home</NavLink>
      <br></br>
      <NavLink to="/about">About</NavLink>
      <br></br>
      <NavLink to="/vehicle">Your Vehicles</NavLink>
      <br></br>
    </nav>
  )
}

export default Nav

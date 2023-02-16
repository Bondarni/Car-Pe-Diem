import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <h1>Car-pe Diem</h1>
      <div>
        <NavLink to="/">Home</NavLink>
        <br></br>
        <NavLink to="/about">About</NavLink>
        <br></br>
        <NavLink to="/vehicle">Your Vehicles</NavLink>
        <br></br>
      </div>
    </nav>
  )
}

export default Nav

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="homepage">
      <h1>Car-pe Diem!</h1>
      <h3>Sieze the Day, Not the Engine</h3>
      <Link to="/vehicle">Click Here to open your garage!</Link>
    </div>
  )
}

export default Home

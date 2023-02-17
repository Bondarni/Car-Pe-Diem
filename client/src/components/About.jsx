import Nav from './Nav'

const About = () => {
  return (
    <div className="aboutsection">
      <Nav />
      <h2>
        Is tracking all your vehicle maintenance<br></br>Driving You Crazy?
      </h2>
      <p className="aboutbody">
        Remembering when you did what and for how much to which car is a
        headache. Sure the folks at the shop will hold on to maintenance records
        sometimes, but what if you go to multiple places? What if you decide you
        want to take a look yourself?
      </p>
      <img
        className="frustrateddriver"
        src="https://images.unsplash.com/photo-1618498390344-445c804f2ac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="frustration"
      />
      <p className="aboutbody">
        {' '}
        Use this handy resource online to record maintenance notes and other
        things about your ride. Upload pictures, details, to-dos,and even that
        weird noise you heard from somewhere under the hood. Whether you've got
        a car, a tank, a bicycle, or even a sled; Car-pe Diem will hold onto the
        details so you can keep on rolling.
      </p>
      <img
        className="jubilantbiker"
        src="https://images.pexels.com/photos/2885429/pexels-photo-2885429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="jubilation"
      />
    </div>
  )
}
export default About

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <div className="logo">
               <h1>BookingApp</h1> 
            </div>
            <div className="navItems">
                <button className='button'>Register</button>
                <button className='button'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
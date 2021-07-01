import './styles/Navbar.scss';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/shop'>
        <p className='eyewear'>EyeWear</p>
      </Link>
      <p>Contact Lenses</p>
      <p>Book an Appointment</p>
      <p>About Us</p>
      <p>Contact</p>
    </nav>
  )
}
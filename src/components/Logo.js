import React from "react";
import {Link} from 'react-router-dom';
import logo from '../logo.jpeg';
import './styles/Logo.scss';


export default function Logo() {
  return (
    <div className='logo_header'>
      <div></div>
      <Link to='/'>
        <img src={logo} className='logo' alt='logo'/>
      </Link>
      <div>
        <img src="https://img.icons8.com/ios/50/000000/like--v1.png" alt='fav' className='fav'/>
        <img src="https://img.icons8.com/ios/50/000000/shopping-bag--v1.png" alt='bag' className='bag'></img>
      </div>
    </div>
  )
}

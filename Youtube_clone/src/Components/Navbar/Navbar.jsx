import React from 'react';
import './Navbar.css';
import upload_icon from '../../assets/upload.jpg';
import more_icon from '../../assets/more.jpg';
import noti_icon from '../../assets/notification.jpg';
import profile_icon from '../../assets/profile.png';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu.jpg';
import search_icon from '../../assets/search.jpg';
import { Link } from 'react-router-dom';
export default function Navbar({ setSidebar }) {
  return (
    <nav className='flex-div'>


      <div className='nav-left flex-div'>
        <img className='menu' onClick={() => setSidebar(prev => prev === false ? true : false)} src={menu_icon}></img>
        <Link to='/'><img className='logo' src={logo}></img></Link>
        <h1>YouTube</h1>
      </div>


      <div className='nav-middle flex-div'>
        <input type="text" placeholder='search'></input>
        <img className='search' src={search_icon}></img>
      </div>

      <div className='nav-right flex-div'>
        <img className='upload_icon' src={upload_icon}></img>
        <img className='more_icon' src={more_icon}></img>
        <img className='noti_icon' src={noti_icon}></img>
        <img className='user_icon' src={profile_icon}></img>
      </div>


    </nav>
  );
}

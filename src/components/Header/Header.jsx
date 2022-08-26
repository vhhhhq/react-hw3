import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { useNavigate } from "react-router-dom";
import Search from '../../assets/img/Search.svg'

const Header = () => {
  const navigate = useNavigate();

  const handleLogo = () => {
    navigate('/');
  }

  return (
    <header className='header'>
        <div className="header-container">
            <div className="header-nav">
                <Link to="/home" className='nav-link'>Home</Link>
                <Link to="/directory" className='nav-link'>Directory</Link>
            </div>
            <div className="navigation">
                <div className="btn-search">
                    <button>
                        <img src={Search} alt="search" />
                    </button>
                    <input type="search" placeholder='What are you looking for Sempai?'/>  
                </div>
            </div>
            <div className="header-sign">
                <Link to="/sign" className='nav-search'>Sign In</Link>
            </div>
        </div>
    </header>
  )
}

export default Header

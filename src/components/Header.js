import React from 'react';
import logo from '../newengenLogo.png';

const Header = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src={logo} alt="New Engen" className="nav__image" />
      </div>

      <div className="nav__searchbar">
        <label htmlFor="nav__input">
          <input 
            type="text" 
            id="nav__input"
            placeholder="Search"
          />
        </label>
      </div>
    </nav>
  )
}

export default Header;
import React from 'react'
import { NavLink} from 'react-router-dom';

function Navigation() {

  const navStyles = {
    display: 'flex',
    backgroundColor: '#2596be',
    padding: '10px',
    flexDirection: 'row',
    alignItems:'flex-end',
  };
  
  const linkStyles = {
    textDecoration: 'none',
    color: 'white',
    margin: '0 10px',
    padding: '8px',
    borderRadius: '5px',
    transition: 'background 0.3s',
  };
  
  return (
    <div style={navStyles}>
      <img src='https://i.postimg.cc/50YSR4Dd/apple-icon-precomposed-removebg-preview.png' alt='gostore'/>
      <NavLink exact to="/"  style={linkStyles}>
        Home
      </NavLink>
      <NavLink exact to="/cart" style={linkStyles}>
        Cart
      </NavLink>
      <NavLink exact to="/checkout" style={linkStyles}>
        Checkout
      </NavLink>
      <NavLink exact to="/aboutus" style={linkStyles} >
        About Us
      </NavLink>
      <NavLink exact to="/contactus" style={linkStyles} >
        Contact Us
      </NavLink>
    </div>
  )
}

export default Navigation
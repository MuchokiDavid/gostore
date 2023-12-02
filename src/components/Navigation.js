import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom';

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
  
  const activeLinkStyles = {
    background: 'lightblue',
  };
  
  return (
    <div style={navStyles}>
      <img src='https://i.postimg.cc/50YSR4Dd/apple-icon-precomposed-removebg-preview.png' alt='gostore'/>
      <NavLink to="/" exact style={linkStyles}>
        Home
      </NavLink>
      <NavLink to="/cart" style={linkStyles}>
        Cart
      </NavLink>
      <NavLink to="/checkout" style={linkStyles}>
        Checkout
      </NavLink>
      <NavLink to="/aboutus" style={linkStyles} >
        About Us
      </NavLink>
      <NavLink to="/contactus" style={linkStyles} >
        Contact Us
      </NavLink>
    </div>
  )
}

export default Navigation
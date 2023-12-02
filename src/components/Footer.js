import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom';

function Footer() {
  const linkStyles = {
    textDecoration: 'none',
    color: 'white',
    margin: '0 10px',
    padding: '8px',
    borderRadius: '5px',
    transition: 'background 0.3s',
  };

  //footer style
  const footerStyles= {
    display: 'flex',
    backgroundColor: '#2596be',
    padding: '10px',
    flexDirection: 'column',
    alignItems:'flex-centre',
  }

  return (
    <div style={footerStyles}>
      <footer >
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
        <p style={{ color: "white" }}>&copy;2023 - gostore</p>
      </footer>
    </div>
  )
}

export default Footer
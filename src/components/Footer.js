import React from 'react'
import { NavLink} from 'react-router-dom';

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
      <NavLink  to="/" exact = "true" style={linkStyles}>
        Home
      </NavLink>
      <NavLink  to="/cart" exact = "true" style={linkStyles}>
        Cart
      </NavLink>
      <NavLink  to="/checkout" exact = "true" style={linkStyles}>
        Checkout
      </NavLink>
      <NavLink  to="/aboutus" exact = "true" style={linkStyles} >
        About Us
      </NavLink>
      <NavLink  to="/contactus" exact = "true" style={linkStyles} >
        Contact Us
      </NavLink>
      <hr/>
        <p style={{ color: "white" }}>&copy;2023 - gostore</p>
      </footer>
    </div>
  )
}

export default Footer
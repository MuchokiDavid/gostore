import React from 'react'
import Navigation from '../components/Navigation'
import CheckoutForm from '../checkoutform/CheckoutForm'
import Footer from '../components/Footer'

function CheckoutPage() {
  return (
    <div>
      <Navigation/>
      <CheckoutForm/>
      <Footer/>
    </div>
  )
}

export default CheckoutPage
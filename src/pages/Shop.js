import React from 'react'
import ProductList from '../components/ProductList'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

function Shop() {
  return (
    <div>
      <Navigation/>
      <ProductList/>
      <Footer/>
    </div>
  )
}

export default Shop
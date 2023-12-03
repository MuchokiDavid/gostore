import React from 'react'
import { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchBar from './SearchBar';
import { useCart } from './CartContext';
import Notification from '../context/Notification';

function ProductList() {
  const[products, setProducts]= useState([])
  const[loading, setLoading]= useState(true)
  const[error, setError]= useState(null)
  const[searchTerm, setSearchTerm]= useState("")
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { addToCart } = useCart();
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/products");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  function searchBar(searchTerm){
    setSearchTerm(searchTerm);
    const productFilter = products.filter(product=> {
      return product.title.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setFilteredProducts(productFilter);
  }
  // console.log(searchTerm);

  const productFiltered= filteredProducts.map((product, index)=>{
    return (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} xl={2} className="">
            <Card style={{ width: '18rem' }} key={index} >
              <Card.Img variant="top" src={product.images[1]} alt={product.title}/>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text> Ksh.
                  {product.price}
                </Card.Text>
                <Button onClick={()=> {addToCart(product); setShowNotification(true);}} variant="primary">Add To Cart</Button>
              </Card.Body>
            </Card>
        </Col>
    )
  })

  const productItems= products.map((product, index)=>{
    return (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} xl={2} className="">
            <Card style={{ width: '18rem' }} key={index} >
              <Card.Img variant="top" src={product.images[1]} alt={product.title}/>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text> Ksh.
                  {product.price}
                </Card.Text>
                <Button onClick={()=> {addToCart(product); setShowNotification(true);}} variant="primary">Add To Cart</Button>
              </Card.Body>
            </Card>
        </Col>
    )
  })

  

  return (
    <div>
      <div className='mt-0'>
        <SearchBar searchFunc= {searchBar}/>
      </div>
      <h3>Shop</h3>
      <div>
        <Row>
          {showNotification && <Notification message="Added to Cart" />}
          {searchTerm ? (productFiltered):(productItems)}
        </Row>
      </div>
    </div>
  )
}

export default ProductList
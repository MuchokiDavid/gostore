import React from 'react'
import { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProductList() {
  const[products, setProducts]= useState([])
  const[loading, setLoading]= useState(true)
  const[error, setError]= useState(null)

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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  // console.log(products);
  const productItems= products.map((product, index)=>{
    return (
      // 100px180
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} xl={2} className="">
            <Card style={{ width: '18rem' }} key={index} >
              <Card.Img variant="top" src={product.images[1]} alt={product.title}/>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text> Ksh.
                  {product.price}
                </Card.Text>
                <Button variant="primary">Add To Cart</Button>
              </Card.Body>
            </Card>
        </Col>
    )
  })
  return (
    <div>
      <Row>
      {productItems}
      </Row>
    </div>
  )
}

export default ProductList
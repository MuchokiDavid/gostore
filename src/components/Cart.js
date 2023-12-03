import React from 'react'
import { useCart } from './CartContext'
import Table from 'react-bootstrap/Table';


function Cart() {
  const { cart } = useCart();
  // console.log('Cart component rendered. Cart:', cart);
  
  const Cards=
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th></th>
          <th>Product Title</th>
          <th>Price</th>
          <th>Category</th>
          <th>Quantity</th>
        </tr>
      </thead>
      { cart.map((item, index) => {
      return (<tbody id='index'>
        <tr >
          <td><img className='h-12' src= {`${item.images[1]}`} alt={item.title}/></td>
          <td>{item.title}</td>
          <td>{item.price}</td>
          <td>{item.category.name}</td>
          <td></td>
        </tr>
      </tbody>
      )})}
    </Table>
  
  // <Card style={{ width: '10rem'}}>
  //       <Card.Body>
  //         <Card.Img variant="top" src= {`${item.images[1]}`} />
  //         <Card.Title>{item.title}</Card.Title>
  //         <Card.Text>{item.price}</Card.Text>
  //         <Card.Text>{item.category.name}</Card.Text>
  //       </Card.Body>
  //     </Card>

  return (
    <div>
      <h3>Shopping Cart</h3>
      {Cards}
    </div>
  )
}

export default Cart
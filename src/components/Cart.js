import React, { useState } from 'react'
import { useCart } from './CartContext'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Notification from '../context/Notification';


function Cart() {
  const { cart } = useCart();
  // console.log('Cart component rendered. Cart:', cart);
  const [total, setTotal]= useState(0)
  const [sum, setSum] = useState(0)
  const [showNotification, setShowNotification] = useState(false);

  const Cards=
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th></th>
          <th>Product Title</th>
          <th>Price</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      { cart.map((item, index) => {
      return (<tbody id='index'>
        <tr >
          <td><img className='h-36 ml-5' src= {`${item.images[1]}`} alt={item.title}/></td>
          <td>{item.title}</td>
          <td>Sh. {item.price}</td>
          <td>{item.category.name}</td>
          <td><input
              className="rounded-md border-0 py-1.5 pl-5 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0"
              type="number"
              name='quantity'
              onChange={(event) =>setTotal(event.target.value * item.price)}
            /></td>
            <td><Button variant='danger' onClick={()=>{}}>Remove</Button></td>
        </tr>
      </tbody>
      )})}
    </Table>

  return (
    <div>
      <h3>Shopping Cart</h3>
      {Cards}
      <h4>Total {total}</h4>
    </div>
  )
}

export default Cart
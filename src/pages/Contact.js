import React from 'react'
import Message from '../components/Message'
import Footer from '../components/Footer'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from '../components/Navigation';

function Contact() {
  return (
    <div>
      <Navigation/>
      <h3 className='mb-4 mt-3'>Contact us</h3>
      <Row>
        <Col>
          <h4 className='mb-3'>Call us</h4>
          <p>0723018212</p>
          <p>0740881213</p>
        </Col>
        <Col>
        <h4 className='mb-3'>Email us</h4>
          <p><a href=''>dmmuchoki7@gmail.com</a></p>
          <p>davidmuchoki7@gmail.com</p>
        </Col>
        <Col>
        <h4 className='mb-3'>Social media</h4>
          <p>0723018212</p>
          <p>0740881213</p>
        </Col>
      </Row>
      <hr/>
      <Message/>
      <Footer/>
    </div>
  )
}

export default Contact
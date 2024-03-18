import React from 'react'
import { useLocation } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';

const ProductDetails = () => {

    const location=useLocation()
    // const product=location.state;
    console.log("The details product",location);

    const dispatch=useDispatch()

  return (
    <div>
        <h1>ProductDetails</h1>
        
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={location.state.image} />
      <Card.Body>
        <Card.Title>{location.state.title}</Card.Title>
        <Card.Text>
          Price:{location.state.price}
        </Card.Text>
       
      </Card.Body>
    </Card>


    </div>
  )
}

export default ProductDetails
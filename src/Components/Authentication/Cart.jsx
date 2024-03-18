import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { rmvcart } from '../Redux/Slice/CrudSlice';

const Cart = () => {

  const dispatch=useDispatch()
    const {cartitem}=useSelector(state=> state.curd)   
  return (
    <div>
        <h1>cart page</h1>
        <Container>
        <Row>
          {cartitem?.map((post, index) => (
            <Col key={post.id}>
              <Card style={{ width: "200px", height: "400px" }}>
                <Card.Img
                  variant="top"
                  //    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUm5Y6RI46TKJT1S-2j7xF71l5nuzYhUPz_vPbFDoIZFElY6Kq"
                  src={post.image}
                />
                <Card.Body>
                  {/* <Card.Title>{post.title}</Card.Title> */}
                  <Card.Title>{post.category}</Card.Title>
                  <Card.Text>{/* {post.description} */}</Card.Text>
                  <Button variant="danger"
                  onClick={(e)=>{
                    dispatch(rmvcart(post.id))
                  }}  
                  >delete</Button>

                 
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>    
    </div>
  )
}

export default Cart
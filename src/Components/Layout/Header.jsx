import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { cartitem } = useSelector((state) => state.curd);
  let procount = cartitem.length;
  console.log("the procount", procount);
  return (
    <div>
      <Navbar expand="lg" bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">React-Webhibe</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="booking">
                Booking
              </Nav.Link>
              <Nav.Link as={Link} to="details">
                Booking Details
              </Nav.Link>
              <Nav.Link as={Link} to="product">
                product
              </Nav.Link>
              <Nav.Link as={Link} to="cart">
                Cart{cartitem.length === 0 ? "" : <span>({procount})</span>}
              </Nav.Link>
              {/* <Nav.Link as={Link} to="">
                product
              </Nav.Link> */}

              <Nav.Link as={Link} to="parentform">
                ParentForm
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

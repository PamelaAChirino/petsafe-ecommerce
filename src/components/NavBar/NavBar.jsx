import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import petsafeIcon from "./../../assets/petsafe.svg";
import CartWidget from "./CartWidget"; 
import "./navbar.css"; 

function NavBar() {
  const cartCount = 3;
  return (
    <Navbar className="custom-navbar" expand="lg" fixed="top">
      <Container>
        <img src={petsafeIcon} alt="Usuario" width="24" height="24" />
        <Navbar.Brand href="#">Pet safe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Medicinas</Nav.Link>
            <Nav.Link href="#">Insumos</Nav.Link>
            <Nav.Link href="#">Juguetes</Nav.Link>
          </Nav>
          {/* CartWidget Component */}
          <Nav className="ml-auto">
            <Nav.Link href="#cart">
              <CartWidget count={cartCount} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

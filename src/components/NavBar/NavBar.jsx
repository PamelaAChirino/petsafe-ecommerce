import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import petsafeIcon from "./../../assets/petsafe.svg";
import CartWidget from "./CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const cartCount = 3;

  return (
    <Navbar className="custom-navbar" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img src={petsafeIcon} alt="Usuario" width="24" height="24" />
          Pet safe
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/category/perros">Perros</Nav.Link>
            <Nav.Link as={Link} to="/category/gatos">Gatos</Nav.Link>
            <Nav.Link as={Link} to="/category/aves">Aves</Nav.Link>
          </Nav>
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
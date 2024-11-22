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
      <Container fluid>
        {/* Sección superior: Logo y carrito */}
        <div className="navbar-top">
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <img
                src={petsafeIcon}
                alt="Logo Petsafe"
                width="40"
                height="40"
              />
              Pet Safe
            </Link>
          </Navbar.Brand>
          <Nav.Link href="#cart">
            <CartWidget count={cartCount} />
          </Nav.Link>
        </div>

        {/* Sección inferior: Menú centrado */}
        <div className="navbar-bottom">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center">
              <Nav.Link as={Link} to="/category/perros">
                Perros
              </Nav.Link>
              <Nav.Link as={Link} to="/category/gatos">
                Gatos
              </Nav.Link>
              <Nav.Link as={Link} to="/category/aves">
                Aves
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;

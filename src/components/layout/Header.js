import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" className="navbar-light py-3 shadow-sm" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">
          <span className="brand-text">Marriage Shapers</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" exact className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-link">
              About Us
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services" className="nav-link">
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog" className="nav-link">
              Blog
            </Nav.Link>
            <Nav.Link as={NavLink} to="/events" className="nav-link">
              Events
            </Nav.Link>
            <Nav.Link as={NavLink} to="/gallery" className="nav-link">
              Gallery
            </Nav.Link>
            <Nav.Link as={NavLink} to="/faq" className="nav-link">
              FAQ
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

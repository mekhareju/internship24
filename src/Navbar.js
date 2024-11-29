import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/">
          <img src="/images/gift.png" alt="Gift Shop" style={{ height: '30px' }} />
        </Navbar.Brand>
        
        {/* Toggle button for small screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        {/* Navbar links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link href="#">Projects</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>

          {/* Login Link */}
          <Nav>
            <Nav.Link as={Link} to="/login">
              <span className="glyphicon glyphicon-log-in"></span> Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container fluid className="text-center" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Row className="content" style={{ flex: 1 }}>
        <Col sm={12} className="text-left">
          <h1>About Us</h1>
          <p>Welcome to our small business store. We are committed to providing high-quality products and services to meet your needs.</p>
          <hr />
          <p>Our mission is to create a delightful experience for our customers by offering the best value and exceptional service. Thank you for visiting!</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

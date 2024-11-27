import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container fluid className="text-center">
      <Row className="content">
        <Col sm={12} className="text-left">
          <h1>Welcome</h1>
          <p>This is a small business gift store.</p>
          <hr />
          <h3>Our Featured Products</h3>
          
          {/* Image Grid */}
          <Row>
            <Col sm={4}>
              <img src="/images/img.png" alt="product 1" className="img-responsive" />
            </Col>
            <Col sm={4}>
              <img src="/images/img2.png" alt="product 2" className="img-responsive" />
            </Col>
            <Col sm={4}>
              <img src="/images/img3.png" alt="product 3" className="img-responsive" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
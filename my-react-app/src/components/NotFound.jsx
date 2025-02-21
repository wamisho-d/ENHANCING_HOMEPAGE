import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { NavLink } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h1 className="text-danger">404 - Not Found</h1>
          <p className="text-muted">The page you are looking for does not exist.</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Image 
            src="https://via.placeholder.com/300x200" 
            alt="Not Found" 
            fluid 
            rounded 
          />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <NavLink to="/">
            <Button variant="primary">Go Back to Homepage</Button>
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;

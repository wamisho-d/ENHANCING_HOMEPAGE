import React from 'react';
import { Button, Card, Container, Row, Col, Image } from 'react-bootstrap';

const HomePage = () => {
    return (
        <Container style={{ backgroundColor: '#f8f9fa', color: '#343a40', padding: '20px', border: '1px solid #dee2e6' }}>
            <Row className="mb-4">
                <Col>
                    <h1>Welcome to Our Store!</h1>
                    <Button variant="primary" size="lg" className="shadow-sm">Shop Now</Button>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                    <Image src="src/assets/welcome-image.jpg" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Card.Title>Featured Product</Card.Title>
                            <Card.Text>
                                Check out our latest and greatest products that we have to offer!
                            </Card.Text>
                            <Button variant="secondary">Learn More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;

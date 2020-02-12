import React from 'react';
// Bootstrap
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
// CSS
import './Contact.css';

const Contact = () => {
    return (
        <Container id="contact_container" className="mt-4 ml-3">
            <Row>
                <Col>
                    <Container className="text-left">
                        <h3>Contact Us</h3>
    
                        <span className="text-italic">
                            If you have any questions, please fill the form below.
                            We will try to answer as soon as possible.
                        </span>
                    </Container>
                    
                    <Container>
                        <Form className="mt-4">
                            <Form.Group className="text-left" controlId="contactName">
                                <Form.Label>NAME</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group className="text-left" controlId="contactEmail">
                                <Form.Label>EMAIL</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>

                            <Form.Group className="text-left" controlId="contactText">
                                <Form.Label>YOUR MESSAGE</Form.Label>
                                <Form.Control as="textarea" />
                                <span className="text-italic">Please provide all the information you possibly can.</span>
                            </Form.Group>

                            <Button id="btn_contact" variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;
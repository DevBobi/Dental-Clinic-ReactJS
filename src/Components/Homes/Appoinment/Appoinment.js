import React from 'react';
import { Button, Card, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import './Appoinment.css'

const Appoinment = () => {
    return (
        <div className="appoinment-div">
            <Row xs={1} md={2} lg={2}>
                <div className="border rounded g-5 text-light ">
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-info">Card Subtitle</Card.Subtitle>
                        <Card.Title> <h2>Make An Appointment Today!</h2> </Card.Title>
                        <Card.Text>
                            Our Dental clinic provides high-level dental services, offers comprehensive solutions for the treatment of any dental disease.Our Clinic is dedicated to providing the most up to date general, orthodontic and family dentistry.
                            Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and advanced restorative dentistry.
                        </Card.Text>

                    </Card.Body>
                </div>
                <div className="g-5">
                    <Form>
                        <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <div className="d-grid py-3">
                            <Button variant="secondary" size="lg">
                                Submit Appoinment
                            </Button>
                        </div>
                    </Form>
                </div>
            </Row >
        </div >
    );
};

export default Appoinment;
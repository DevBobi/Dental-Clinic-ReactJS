import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, title, desc, image } = service;
    return (
        <div className="">

            <Card className=" m-3 service border-dark" >
                <Card.Img variant="top" className="img" src={image} />
                <Card.Body className="p-5">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <Link to={`/serviceDetail/${id}`}>
                        <Button variant="info">Learn More</Button>
                    </Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Service;
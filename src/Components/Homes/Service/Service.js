import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';
import { BiRightArrowAlt } from "react-icons/bi";

const Service = ({ service }) => {
    const { id, title, desc, image } = service;
    return (
        <div>

            <Card className=" m-3 service border-dark" >
                <Card.Img variant="top" className="img rounded" src={image} />
                <Card.Body className="p-5">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <Link to={`/serviceDetail/${id}`}>
                        <Button variant="secondary" className="fw-normal rounded-pill px-3">Learn More <BiRightArrowAlt /></Button>
                    </Link>
                </Card.Body>
            </Card>

        </div >
    );
};

export default Service;
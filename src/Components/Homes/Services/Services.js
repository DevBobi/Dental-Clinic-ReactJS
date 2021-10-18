import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <>
            <div className="container py-5 ">
                <h1>Our services</h1>
                <Row xs={1} md={3} className="gy-4">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}

                        ></Service>)
                    }
                </Row>
                <Button variant="secondary" className="mt-5">Make An Appointment</Button>
            </div>
        </>
    );
};

export default Services;
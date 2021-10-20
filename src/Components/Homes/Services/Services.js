import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <>
            <div className="container py-5  ">
                <hr />
                <h1>Services</h1>
                <p>Have a quick overview of our services</p>
                <Row xs={1} md={3} className="gy-4">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}

                        ></Service>)
                    }
                </Row>
            </div>
        </>
    );
};

export default Services;
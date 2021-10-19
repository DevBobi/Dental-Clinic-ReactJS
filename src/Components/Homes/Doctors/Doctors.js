import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {

    const [doctor, setDoctor] = useState([]);

    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, []);

    return (
        <>
            <div className="container py-5 services ">
                <hr />
                <h1>Our Doctors</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and</p>
                <Row xs={1} md={3} className="gy-4">
                    {
                        doctor.map(doctor => <Doctor
                            key={doctor.id}
                            doctor={doctor}

                        ></Doctor>)
                    }
                </Row>
                {/* <Button variant="secondary" className="mt-5 ">See More Services</Button> */}
            </div>
        </>
    );
};

export default Doctors;
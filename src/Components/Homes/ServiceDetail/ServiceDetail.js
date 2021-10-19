import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useData from '../../../Hooks/useData';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const { services } = useData();

    const detail = services.find(service => service.id == serviceId);

    return (
        <div>

            <div className="container my-5">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h2>{detail?.title}</h2>
                        <p>{detail?.desc}</p>
                        <h2>${detail?.price}</h2>
                        <Button variant="secondary" className=" btn-md">Make An Appointment <i className="fas fa-cart-plus"></i></Button>
                        <Link to="/">
                            <button className="btn btn-danger btn-md ms-4">Go Back</button>
                        </Link>

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 my-">
                        <img width="100%" src={detail?.image} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetail;
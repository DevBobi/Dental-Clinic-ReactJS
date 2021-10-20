import { Button } from '@mui/material';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useData from '../../../Hooks/useData';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const { services } = useData();

    const detail = services.find(service => service.id == serviceId);

    return (
        <div>

            <div className="container my-5 py-2">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h2>{detail?.title}</h2>
                        <p>{detail?.desc}</p>
                        <h2>{detail?.price}</h2>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" color="secondary">Go Home</Button>
                        </Link>

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 my-4">
                        <img className="my-1" width="75%" src={detail?.image} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetail;
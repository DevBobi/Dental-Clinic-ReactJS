import React from 'react';
import { Button } from '@mui/material';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useData from '../../../Hooks/useData';

const DoctorDetail = () => {
    const { doctorId } = useParams();
    const { doctors } = useData();

    const detail = doctors.find(doctor => doctor.id == doctorId);
    return (
        <div>
            <div className="container my-5">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h2>{detail?.title}</h2>
                        <h6>{detail?.specialist}</h6>
                        <p>{detail?.desc}</p>

                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" color="secondary">Go Home</Button>
                        </Link>

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 my-4">
                        <img className="rounded-circle" width="75%" src={detail?.image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetail;
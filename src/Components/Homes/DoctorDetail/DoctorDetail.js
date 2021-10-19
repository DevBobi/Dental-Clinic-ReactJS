import React from 'react';
import { Button } from 'react-bootstrap';
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

export default DoctorDetail;
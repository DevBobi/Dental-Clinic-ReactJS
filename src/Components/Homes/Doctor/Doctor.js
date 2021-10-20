import { Button, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Doctor = ({ doctor }) => {
    const { id, title, desc, image, specialist } = doctor;
    return (
        <div>

            <div className="p-5">
                <Card sx={{ maxWidth: 345, minWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image={image}
                            alt="doctors"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography gutterBottom variant="h6" color="primary" component="div">
                                <span>{specialist}</span>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {desc.slice(0, 80)}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Link to={`/doctorDetail/${id}`} style={{ textDecoration: 'none' }}>
                            <Button variant="contained" color="info">
                                Make An Appoinment
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            </div>

        </div>
    );
};

export default Doctor;
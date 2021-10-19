import { Button, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Doctor = ({ doctor }) => {
    const { id, title, desc, image, specialist } = doctor;
    return (
        <div>

            <div>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            image={image}
                            alt="doctors"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                <span>{specialist}</span>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {desc}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link to={`/doctorDetail/${id}`}>
                            <Button variant="contained" color="success">
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
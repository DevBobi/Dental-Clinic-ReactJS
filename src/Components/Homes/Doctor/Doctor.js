
import { Button, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Card } from 'react-bootstrap';


const Doctor = ({ doctor }) => {
    const { id, title, desc, image, specialist } = doctor;
    return (
        <div>
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
                            <Button size="small" color="primary">
                                Make An Appoinment
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
            {/* <Card className="mx-5">
                <Card.Img variant="top" className="rounded-circle p-3" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {specialist}
                    </Card.Text>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <Button variant="contained" color="success">
                        Make An Appointment
                    </Button>
                </Card.Body>
            </Card> */}

        </div>
    );
};

export default Doctor;
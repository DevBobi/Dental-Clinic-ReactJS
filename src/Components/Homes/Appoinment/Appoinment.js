import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
// import { Card, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import './Appoinment.css'

const Appoinment = () => {
    return (
        <div className="appoinment-div">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}
                    alignItems="center"
                    justify="center">
                    <Grid item xs={12} flexDirection md={8}>
                        <Card sx={{ maxWidth: 500, minWidth: 300 }}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Make An Appointment Today!
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Our Dental clinic provides high-level dental services, offers comprehensive solutions for the treatment of any dental disease.Our Clinic is dedicated to providing the most up to date general, orthodontic and family dentistry.
                                        Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and advanced restorative dentistry.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={6} md={4}>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >

                            <TextField
                                label="First Name" variant="standard" color="warning" focused
                            />
                            <TextField
                                label="Last Name" variant="standard" color="warning" focused
                            />
                            <TextField
                                label="Email" variant="standard" color="warning" focused
                            />
                            <Button variant="contained" color="success">Submit</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div >
    );
};

export default Appoinment;
import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
// import { Card, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import './Appoinment.css'

const Appoinment = () => {
    return (
        <div className="appoinment-div">
            <Grid container spacing={12} columns={12}>

                <Grid item xs={8}
                    flexDirection md={12}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="strech"
                >
                    <Card sx={{ maxWidth: 600, minWidth: 400 }}>
                        <CardActionArea>
                            <CardContent className="align-items-center">
                                <Typography gutterBottom variant="h2" component="div">
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

                <Grid item xs={8} md={4}
                    flexDirection md={12} xs={4}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 2, width: '30ch' },
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
        </div >
    );
};

export default Appoinment;
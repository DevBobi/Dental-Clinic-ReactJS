import { Box } from '@mui/system';
import { Skeleton } from '@mui/material';
import React from 'react';
// import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {

    const { user, isLoading } = useAuth();

    if (isLoading) {
        return (
            <div className="container pt-5 mt-5">
                <Box sx={{ width: 1200, height: 1200 }}

                >
                    <Skeleton />
                    <Skeleton animation="wave" />
                    <Skeleton animation={false} />
                </Box>
            </div>
        );
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/signin",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
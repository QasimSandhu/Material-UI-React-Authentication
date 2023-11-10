import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChangePassword from './ChangePassword';

const Dashboard = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/login_registration')
    }
    return (
        <>
            <CssBaseline />
            <Grid container>
                <Grid item sm={4} sx={{ backgroundColor: 'gray', p: 5, color: 'white' }} >
                    <h1>Dashboard</h1>
                    <Typography variant='h5' >Name: Qasim</Typography>
                    <Typography variant='h6' >Email: qasim@gmail.com</Typography>
                    <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{ mt: 8 }}>Logout</Button>
                </Grid>
                <Grid item sm={8} sx={{ p: 5 }}>
                    <ChangePassword />
                </Grid>
            </Grid>
        </>
    );
}

export default Dashboard;

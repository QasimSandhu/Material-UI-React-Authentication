import { Alert, Box, Button, Grid, TextField } from '@mui/material';
import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResetEmail = () => {
    // Define an error
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    });

    // Navigate current page to other page
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Get data from input fields
        const { email } = e.target.elements;
        const actualData = {
            email: email.value
        };

        if (actualData.email) {
            document.getElementById('email-reset-form').reset();
            setError({
                status: true, msg: "Password Reset Email Sent. Check Your Email ! ", type: 'success'
            });
            setTimeout(() => {
                navigate('/reset_password')
            }, 3000);
        } else {
            setError({
                status: true, msg: "Please Provide Valid Email", type: 'error'
            });
        }
    };

    return (
        <Grid container justifyContent={'center'} >
            <Grid item sm={6} xs={12}>
                <h1>Reset Password</h1>
                <Box component='form' noValidate sx={{ mt: 1 }} id='email-reset-form' onSubmit={handleSubmit}>
                    <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
                    <Box textAlign='center' my={3}>
                        <Button type='submit' variant='contained'>Reset Email</Button>
                    </Box>
                    {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
                </Box>
            </Grid>
        </Grid>
    );
};

export default ResetEmail;

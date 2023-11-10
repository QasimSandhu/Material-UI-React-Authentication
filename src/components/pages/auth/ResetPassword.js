import { Alert, Box, Button, Grid, TextField } from '@mui/material';
import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    // Navigate current page to other page
    const navigate = useNavigate();

    // Define an error
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    });

    // Navigate current page to other page
    const handleSubmit = (e) => {
        e.preventDefault();
        // Get data from input fields
        const { password, confirm_password } = e.target.elements;
        const actualData = {
            password: password.value,
            confirm_password: confirm_password.value
        };

        if (actualData.password && actualData.confirm_password) {
            if (actualData.password === actualData.confirm_password) {
                document.getElementById('password-reset-form').reset();
                setError({
                    status: true, msg: "Password Reset Successfully. Redirecting to Login Page...", type: 'success'
                });
                setTimeout(() => {
                    navigate('/login_registration')
                }, 3000);
            } else {
                setError({
                    status: true, msg: "Password Doesn't Matched", type: 'success'
                });
            }
        } else {
            setError({
                status: true, msg: "All Fields are Required", type: 'error'
            });
        }
    };

    return (
        <Grid container justifyContent={'center'} >
            <Grid item sm={6} xs={12}>
                <Box component='form' noValidate sx={{ mt: 1 }} id='password-reset-form' onSubmit={handleSubmit}>
                    <TextField margin='normal' required fullWidth type='password' id='password' name='password' label='New Password' />
                    <TextField margin='normal' required fullWidth type='password' id='confirm_password' name='confirm_password' label='Confirm New Password' />
                    <Box textAlign='center' my={3}>
                        <Button type='submit' variant='contained'>Save </Button>
                    </Box>
                    {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
                </Box>
            </Grid>
        </Grid>
    );
};

export default ResetPassword;

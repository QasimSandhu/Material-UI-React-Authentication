import { Alert, Box, Button, TextField } from '@mui/material';
import { React, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const UserLogin = () => {
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
        const { email, password } = e.target.elements;
        const actualData = {
            email: email.value,
            password: password.value
        };

        if (actualData.email && actualData.password) {
            document.getElementById('user-login-form').reset();
            setError({
                status: true, msg: "Login Success", type: 'success'
            });
            navigate('/dashboard');
        } else {
            setError({
                status: true, msg: "All fields are required", type: 'error'
            });
        }
    };

    return (
        <Box component='form' noValidate sx={{ mt: 1 }} id='user-login-form' onSubmit={handleSubmit}>
            <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
            <TextField margin='normal' required fullWidth type='password' id='password' name='password' label='Password' />
            <Box textAlign='center' my={3}>
                <Button type='submit' variant='contained'>Login</Button>
            </Box>
            <Box> <NavLink to='/reset_email'>Forgot Password ?</NavLink> </Box>
            {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
        </Box>
    );
};

export default UserLogin;

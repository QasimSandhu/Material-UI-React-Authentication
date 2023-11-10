import { Alert, Box, Button, FormControlLabel, TextField, Checkbox } from '@mui/material';
import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserRegistration = () => {
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
        const { name, email, password, confirm_password, tc } = e.target.elements;
        const actualData = {
            name: name.value,
            email: email.value,
            password: password.value,
            confirm_password: confirm_password.value,
            tc: tc.value
        };

        if (actualData.name && actualData.email && actualData.password && actualData.tc !== null) {
            if (actualData.password === actualData.confirm_password) {
                document.getElementById('user-registration-form').reset();
                setError({
                    status: true, msg: "Registration Success", type: 'success'
                });
                navigate('/dashboard');
            } else {
                setError({
                    status: true, msg: "Password Doesn't Matched", type: 'error'
                });
            }
        } else {
            setError({
                status: true, msg: "All fields are required", type: 'error'
            });
        }
    };

    return (
        <Box component='form' noValidate sx={{ mt: 1 }} id='user-registration-form' onSubmit={handleSubmit}>
            <TextField margin='normal' required fullWidth id='name' name='name' label='Name' />
            <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
            <TextField margin='normal' required fullWidth type='password' id='password' name='password' label='Password' />
            <TextField margin='normal' required fullWidth type='password' id='confirm_password' name='confirm_password' label='Confirm Password' />
            <FormControlLabel control={<Checkbox value='agree' color='primary' name='tc' id='tc' />} label="I agree to terms and conditions." />
            <Box textAlign='center' my={3}>
                <Button type='submit' variant='contained'>Join</Button>
            </Box>
            {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
        </Box>
    );
};

export default UserRegistration;

import { Alert, Box, Button, TextField } from '@mui/material';
import { React, useState } from 'react';

const ChangePassword = () => {

    // Define an error
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    });

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
                document.getElementById('password-change-form').reset();
                setError({
                    status: true, msg: "Password Update Successfully.", type: 'success'
                });
                // setTimeout(() => {
                //     navigate('/login_registration')
                // }, 3000);
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
        <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', maxWidth: 600, mx: 4 }}>
            <h1>Change Password</h1>
            <Box component={'form'} onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} id='password-change-form'>
                <TextField margin='normal' required fullWidth name='password' id='password' label='New Password' type='password' />
                <TextField margin='normal' required fullWidth name='confirm_password' id='confirm_password' label='Confirm New Password' type='password' />
                <Box textAlign='center' >
                    <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }} >Update Password</Button>
                </Box>
                {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
            </Box>
        </Box>
    );
};

export default ChangePassword;

import React, { useState } from 'react';
import { Box, Card, Grid, Tab, Tabs, Typography } from '@mui/material';
import web_shopping1 from "../../../images/web_shopping1.png";
import UserLogin from './UserLogin';
import UserRegistration from './UserRegistration';
import { ShoppingBag } from '@mui/icons-material';

const TabPanel = (props) => {
    const { children, value, index } = props;
    return (
        <div role='tabpanel' hidden={value !== index}>
            {
                value === index && (<Box>{children}</Box>)
            }
        </div>
    )
}

const LoginReg = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <Grid container sx={{ height: '90vh' }}>
            {/* Left Grid */}
            <Grid item lg={7} sm={5} sx={{ backgroundImage: `url(${web_shopping1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', display: { xs: 'none', sm: 'block' } }}></Grid>
            {/* Right Grid */}
            <Grid item lg={5} sm={7} xs={12}>
                <Card sx={{ width: '100%', height: '100%' }}>
                    <Box sx={{ mx: 4, height: 530 }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} textColor='secondary' indicatorColor='secondary' onChange={handleChange}>
                                <Tab label='Login' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                                <Tab label='Registration' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}><UserLogin /></TabPanel>
                        <TabPanel value={value} index={1}><UserRegistration /></TabPanel>
                    </Box>
                    <Box textAlign='center' sx={{ mt: 2 }}>
                        <ShoppingBag sx={{ color: 'purple', fontSize: 100 }} />
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Geek-Shop</Typography>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    );
};

export default LoginReg;

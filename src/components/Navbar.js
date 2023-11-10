import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <Typography variant="h5" component='div' sx={{ flexGrow: 1 }}>Geek Shop</Typography>
                    <Button component={NavLink} style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform:'none' }} to="/" >Home</Button>
                    <Button component={NavLink} style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform:'none' }} to="/contact" >Contact</Button>
                    <Button component={NavLink} style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform:'none' }} to="/login_registration" >Login/Registration</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;

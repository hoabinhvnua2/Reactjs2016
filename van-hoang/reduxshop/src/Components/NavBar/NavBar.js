import React from 'react';
import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const NavBar = () => {
    return (
        <div className="Nav-bar">
            <Box 
                sx={{flexGrow: 1, backgroundColor: 'orange'}}
            >
                <AppBar position="static">
                    <Typography variant="h6" component="div" sx={{flexGrow : 1}}>
                        SHOPEE
                    </Typography>
                </AppBar>
            </Box>
        </div>
    );
};

export default NavBar;
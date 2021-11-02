import React from 'react';
import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom';
const NavBar = () => {
    return (
        <div className="Nav-bar">
            <Box 
                sx={{flexGrow: 1, backgroundColor: 'orange'}}
            >
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{flexGrow : 1}}>
                            <Link
                                to = "/"
                            >
                                <div style={{color: 'white'}}>SHOPEE</div>    
                            </Link>  
                        </Typography>
                        <ShoppingCart />
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default NavBar;
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import React from 'react';
import { Container } from '@mui/system';
import logo from '../../assets/images/logo.svg'

const Header = () => {
    return (
        <AppBar position='static'>
            <Container maxWidth="lg">
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
                    <Typography variant='h6' component='h1' fontWeight='700'>وبلاگ هپی لایف</Typography>
                    <img src={logo} alt="logo" />
                    <MenuBookIcon />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
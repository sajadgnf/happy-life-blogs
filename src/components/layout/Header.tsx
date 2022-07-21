import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import React from 'react';
import { Container } from '@mui/system';

const Header = () => {
    return (
        <AppBar position='static'>
            <Container maxWidth="lg">
                <Toolbar>
                    <Typography variant='h6' component='h1' fontWeight='700'  flexGrow='1'>وبلاگ هپی لایف</Typography>
                    <MenuBookIcon />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
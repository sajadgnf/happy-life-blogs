import { AppBar, Toolbar, Typography } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import React from 'react';
import { Container } from '@mui/system';
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position='static'>
            <Container maxWidth="lg">
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
                    <Link to={"/"}>
                        < Typography variant='h6' component='h1' fontWeight='700' color='#fff'>وبلاگ هپی لایف</Typography>
                    </Link>
                    <a href="https://happy-life-beige.vercel.app/">
                    <img src={logo} alt="logo" />
                    </a>
                    <MenuBookIcon sx={{ display: { xs: "none", sm: 'unset' } }} />
                </Toolbar>
            </Container>
        </AppBar >
    );
};

export default Header;
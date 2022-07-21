import { Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <Typography variant='body1' component="p" mt={10} padding='10px' textAlign="center" bgcolor="f7f7f7" color="primary">
                تمامی حقوق این سایت محفوض میباشد
            </Typography>
        </footer>
    );
};

export default Footer;
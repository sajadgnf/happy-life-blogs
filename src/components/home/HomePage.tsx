import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Authors from '../author/Author';
import Blogs from '../blog/Blogs';

const HomePage = () => {

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} padding={3}>
                <Grid item xs={12} md={3} mt={4}>
                    <Typography
                        component="h3"
                        variant='h5'
                        fontWeight="700"
                        mb={3}
                        color='#444'
                    >
                        نویسنده ها
                    </Typography>
                    <Authors />
                </Grid>
                <Grid item xs={12} md={9} mt={4}>
                    <Typography
                        component="h3"
                        variant='h5'
                        fontWeight="700"
                        mb={3}
                        color='#444'
                    >
                        مقاله ها
                    </Typography>
                    <Blogs />
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomePage;
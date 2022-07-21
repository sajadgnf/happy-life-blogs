import { useQuery } from '@apollo/client';
import { Avatar, Card, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { GET_BLOGS_INFO } from '../../graphql/queries';
import CardEL from '../shared/CardEL';
import loader from "../../assets/gifs/loading.gif"
import { Box } from '@mui/system';

export type Author = {
    avatar: { url: string },
    name: string,
    id: string,
    slug: string
}

export type Post = {
    author: Author,
    coverPhoto: { url: string },
    id: string,
    slug: string,
    title: string
}


const Blogs = () => {

    const { loading, data, error } = useQuery(GET_BLOGS_INFO)

    if (loading) return <Box display='flex' justifyContent="center"><img src={loader} /></Box>

    if (error) return <h1>Error...</h1>

    return (
        <Grid container spacing={2}>
            {
                data.posts.map((post: Post) => (
                    <Grid item xs={12} sm={6} md={4} key={post.id}>
                        <CardEL {...post} />
                    </Grid>
                ))
            }
        </Grid>

    );
};

export default Blogs;
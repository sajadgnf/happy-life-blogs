import { useQuery } from '@apollo/client';
import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { GET_BLOGS_INFO } from '../../graphql/queries';
import CardEL from '../shared/CardEL';
import Loader from '../shared/Loader';

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

    // const [state, setState] = useState(10)
    const { loading, data, error } = useQuery(GET_BLOGS_INFO)

    // useEffect(() => {
    //     if (!loading || data) {
    //         setState(data.posts.length)
    //         console.log(state, data.posts.length);
            
    //     }
        
    // }, [data,loading])

    if (loading) return <Loader />

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
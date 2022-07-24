import { useQuery } from '@apollo/client';
import { Avatar, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { useParams } from 'react-router-dom';
import { GET_AUTHOR_INFO } from '../../graphql/queries';
import { Post } from '../blog/Blogs';
import sanitizeHtml from 'sanitize-html';
import CardEL from '../shared/CardEL';
import Loader from '../shared/Loader';

const AuthorsPage = () => {

    const { slug } = useParams()

    const { loading, data, error } = useQuery(GET_AUTHOR_INFO, { variables: { slug } })

    console.log(data);

    if (loading) return <Loader />
    if (error) return <h1>error...</h1>

    const { avatar, description, field, name, posts } = data.author

    return (
        <Container maxWidth="lg">
            <Grid container mt={8}>
                <Grid
                    item
                    xs={12}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                >
                    <Avatar
                        src={avatar.url}
                        sx={{ width: 250, height: 250 }}
                    />
                    <Typography
                        variant='h5'
                        component="h3"
                        fontWeight="700"
                        mt={4}
                    >
                        {name}
                    </Typography>
                    <Typography
                        variant='h5'
                        component="h3"
                        mt={2}
                    >
                        {field}
                    </Typography>
                </Grid>
                <Grid xs={12} mt={5}>
                    <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(description.html) }}></div>
                </Grid>
                <Grid item xs={12} mt={6}>
                    <Typography
                        variant='h5'
                        component="h3"
                        fontWeight="700"
                    >
                        مقالات {name}
                    </Typography>

                    <Grid container mt={1} spacing={2}>
                        {
                            posts.map((post: Post) => (
                                <Grid item xs={12} sm={6} md={4} key={post.id}>
                                    <CardEL {...post} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AuthorsPage;
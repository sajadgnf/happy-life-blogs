import { useQuery } from '@apollo/client';
import { Avatar, Container, Typography, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { GET_BLOG_INFO } from '../../graphql/queries';
import sanitizeHtml from 'sanitize-html'
import Loader from '../shared/Loader';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CommentForm from '../comment/CommentForm';
import Comments from '../comment/Comments';

export type Slug = { slug: string }

const BlogPage = () => {

    const { slug } = useParams()
    const navigate = useNavigate()

    const { loading, data, error } = useQuery(GET_BLOG_INFO, { variables: { slug } })

    if (loading) return <Loader />

    if (error) return <Loader />

    const { coverPhoto, title, author, content } = data.post

    return (
        <Container maxWidth="lg">
            <Grid container>
                <Grid
                    item
                    xs={12}
                    mt={9}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography
                        component="h2"
                        variant='h5'
                        color="primary"
                        fontWeight="700"
                    >
                        {title}
                    </Typography>
                    <ArrowBackIcon cursor='pointer' onClick={() => navigate(-1)} />
                </Grid>
                <Grid item xs={12} mt={6}>
                    <img style={{ borderRadius: 40, maxHeight: '80vh', objectFit: 'cover' }} src={coverPhoto.url} alt={slug} width='100%' />
                </Grid>
            </Grid>
            <Grid
                item
                xs={12}
                mt={6}
                display='flex'
                alignItems="center"
            >
                <Link to={`/authors/${author.slug}`}>
                    <Avatar sx={{ width: 80, height: 80, ml: 2 }} src={author.avatar.url} />
                </Link>
                <Box>
                    <Typography component="h3" variant='h6' fontWeight="700">{author.name}</Typography>
                    <Typography variant="body1" color="text.secondary">{author.field}</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} mt={5}>
                <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(content.html) }}></div>
            </Grid>
            <Grid item xs={12} mt={12}>
                <CommentForm slug={slug} />
            </Grid>
            <Grid item xs={12} mt={12}>
                <Comments slug={slug} />
            </Grid>
        </Container>
    );
};

export default BlogPage;
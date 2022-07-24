import { useQuery } from '@apollo/client';
import { Avatar, Divider, Grid, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { GET_AUTHORS_INFO } from '../../graphql/queries';
import { Author } from '../blog/Blogs';
import Loader from '../shared/Loader';

const Authors = () => {

    const { loading, data, error } = useQuery(GET_AUTHORS_INFO)

    if (loading) return <Loader />

    if (error) return <h1>Error...</h1>

    return (
        <Grid container sx={{ boxShadow: 'rgba(0,0,0,.1) 0 4px 12px', borderRadius: 4 }}>
            {
                data.authors.map((author: Author, index: number) => (
                    <Fragment key={author.id}>
                        <Link to={`authors/${author.slug}`}>
                            <Grid item xs={12} display='flex' alignItems='center' p={2}>
                                <Avatar src={author.avatar.url} sx={{ ml: 2 }} />
                                <Typography color="text.secondary">{author.name}</Typography>
                            </Grid>
                        </Link>
                        {
                            index !== data.authors.length - 1 && (
                                <Grid item xs={12}>
                                    <Divider variant='middle' />
                                </Grid>
                            )
                        }
                    </Fragment>
                ))
            }
        </Grid >
    );
};

export default Authors;
import React from 'react';
import { Avatar, Grid, Typography } from '@mui/material';
import { Slug } from '../blog/BlogPage';
import { useQuery } from '@apollo/client';
import { GET_POST_COMMENTS } from '../../graphql/queries';
import { Box } from '@mui/system';
import Loader from '../shared/Loader';

type Comment = {
    name: string,
    text: string,
    id: number
}

const Comments = ({ slug }: Slug) => {

    const { loading, data, error } = useQuery(GET_POST_COMMENTS, { variables: { slug } })

    if (loading) return <Loader />

    if (error) return <h1>Error...</h1>

    return (
        <Grid
            container
            boxShadow="rgba(0,0,0,0.1) 0 4px 12px"
            borderRadius={4}
            p={2}
        >
            <Grid item xs={12} mt={2}>
                <Typography
                    component="p"
                    variant="h6"
                    fontWeight="700"
                    color="primary"
                >
                    کامنت ها
                </Typography>
            </Grid>
            {
                data.comments.map((comment: Comment) => (
                    <Grid
                        item
                        xs={12}
                        key={comment.id}
                        mt={4}
                        border="1px solid #757575"
                        borderRadius={4}
                        p={2}
                    >
                        <Box display='flex' alignItems="center">
                            <Avatar sx={{ ml: 2 }} />
                            <Typography fontWeight="700">{comment.name}</Typography>
                        </Box>
                        <Box mt={2}>
                            <Typography>{comment.text}</Typography>
                        </Box>
                    </Grid>
                ))
            }
        </Grid>
    );
};

export default Comments;
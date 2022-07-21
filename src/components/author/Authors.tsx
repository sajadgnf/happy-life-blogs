import { useQuery } from '@apollo/client';
import { Avatar, Card, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { borderRadius } from '@mui/system';
import React, { Fragment } from 'react';
import { GET_AUTHORS_INFO } from '../../graphql/queries';
import { Author } from '../blog/Blogs';

const Authors = () => {

    const { loading, data, error } = useQuery(GET_AUTHORS_INFO)

    if (loading) return <h1>Loading...</h1>

    return (
        <Card sx={{ boxShadow: 'rgba(0,0,0,.1) 0 4px 12px', borderRadius: 4 }}>
            <List>
                {
                    data.authors.map((author: Author) => (
                        <Fragment key={author.id}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src={author.avatar.url} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <Typography>{author.name}</Typography>
                                    }
                                />
                            </ListItem>
                            <Divider variant='middle' />
                        </Fragment>
                    ))
                }
            </List>
        </Card >
    );
};

export default Authors;
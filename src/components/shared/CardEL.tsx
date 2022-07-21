import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography } from '@mui/material';
import React from 'react';
import { Post } from '../blog/Blogs';

const CardEL = ({ title, coverPhoto, slug, author }: Post) => {
    return (
        <Card sx={{ boxShadow: "rgba(0,0,0,.1) 0 4px 12px", borderRadius: 4 }}>
            <CardHeader
                avatar={
                    <Avatar src={author.avatar.url} />
                }
                title={
                    <Typography textAlign='end' color='text.primary'>{author.name}</Typography>
                }
            />

            <CardMedia
                component="img"
                height="194"
                image={coverPhoto.url}
                alt={title}
            />

            <CardContent>
                <Typography
                    component='h3'
                    variant='subtitle1'
                    fontWeight="700"
                    noWrap
                    mb={1}
                    title={title}
                >
                    {title}
                </Typography>
            </CardContent>

            <Divider sx={{ mx: 1 }} />

            <CardActions>
                <Button
                    variant="outlined"
                    fullWidth
                    sx={{ borderRadius: 30, mt: 1, fontWeight: "700" }}
                >
                    مطالعه مقاله
                </Button>
            </CardActions>
        </Card>
    );
};

export default CardEL;
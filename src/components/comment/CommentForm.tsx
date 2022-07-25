import { useMutation } from '@apollo/client';
import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { SEND_COMMENT } from '../../graphql/mutations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slug } from '../blog/BlogPage';

const CommentForm = ({ slug }: Slug) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [commentText, setCommentText] = useState('')
    const [pressed, setPressed] = useState(false)

    const [sendComment, { loading, data, error }] = useMutation(SEND_COMMENT, { variables: { name, email, text: commentText, slug } })


    const sendHandler = () => {
        if (name && email && commentText) {
            sendComment()
            setPressed(true)
        } else {
            toast.warn('تمام فیلدها را پر کنید', { position: 'top-center' })
        }
    }

    if (data && pressed) {
        toast.success('کامنت ارسال شد و منتظر تایید میباشد', { position: 'top-center' })
        setPressed(false)
    }

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
                    ارسال کامنت
                </Typography>
            </Grid>
            <Grid item xs={12} mt={4}>
                <TextField
                    variant="outlined"
                    label="نام"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} mt={2}>
                <TextField
                    variant="outlined"
                    label="ایمیل"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} mt={2}>
                <TextField
                    variant="outlined"
                    label="متن کامنت"
                    value={commentText}
                    onChange={e => setCommentText(e.target.value)}
                    fullWidth
                    multiline
                    minRows={4}
                />
            </Grid>
            <Grid item xs={12} mt={2}>
                {
                    loading ?
                        <Button variant="contained" disabled>در حال ارسال ...</Button> :
                        <Button variant="contained" onClick={sendHandler}>ارسال</Button>

                }
            </Grid>
            <ToastContainer rtl />
        </Grid>
    );
};

export default CommentForm;
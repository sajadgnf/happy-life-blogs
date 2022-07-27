import { useMutation } from '@apollo/client';
import { Button, Grid, styled, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { SEND_COMMENT } from '../../graphql/mutations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slug } from '../blog/BlogPage';
import { validate } from '../../helper/functions';

const CustomTextField = styled(TextField)({
    '& label': {
        transformOrigin: "right !important",
        left: "inherit !important",
        right: "1.75rem !important",
        overflow: "unset",
    },
    '& legend': {
        textAlign: 'start'
    }
});

const CommentForm = ({ slug }: Slug) => {

    const [pressed, setPressed] = useState(false)
    const [comment, setComment] = useState({
        name: '',
        email: '',
        text: '',
    })
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        text: ''
    })
    const [touched, setTouched] = useState({
        name: false,
        email: false,
        text: false
    })

    const [sendComment, { loading, data, error }] = useMutation(SEND_COMMENT, {
        variables: {
            name: comment.name,
            email: comment.email,
            text: comment.text,
            slug
        }
    })

    const focusHandler = (e: React.FocusEvent) => {
        const target = e.target as HTMLInputElement
        setTouched({ ...touched, [target.name]: true })
    }

    const inputHandler = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement
        setComment({ ...comment, [target.name]: target.value })
    }

    useEffect(() => {
        setErrors(validate(comment))
    }, [comment, touched])

    const sendHandler = () => {
        sendComment()
        setPressed(true)
    }

    if (data && pressed) {
        toast.success('کامنت ارسال شد و منتظر تایید میباشد', { position: 'top-center' })
        setPressed(false)
    }

    const { name, email, text } = comment    

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
            <Grid item xs={12} mt={4} dir="rtl">
                <CustomTextField
                    variant="outlined"
                    label="نام"
                    value={name}
                    name="name"
                    onChange={e => inputHandler(e)}
                    onFocus={e => focusHandler(e)}
                    fullWidth
                />
                {
                    errors.name && touched.name &&
                    <Typography variant='body2' mt={.5} color="#b71c1c">
                        {errors.name}
                    </Typography>
                }
            </Grid>
            <Grid item xs={12} mt={2}>
                <CustomTextField
                    variant="outlined"
                    label="ایمیل"
                    value={email}
                    name="email"
                    onChange={e => inputHandler(e)}
                    onFocus={e => focusHandler(e)}
                    fullWidth
                />
                {
                    errors.email && touched.email &&
                    <Typography variant='body2' mt={.5} color="#b71c1c">
                        {errors.email}
                    </Typography>
                }
            </Grid>
            <Grid item xs={12} mt={2}>
                <CustomTextField
                    variant="outlined"
                    label="متن کامنت"
                    value={text}
                    name="text"
                    onChange={e => inputHandler(e)}
                    onFocus={e => focusHandler(e)}
                    fullWidth
                    multiline
                    minRows={4}
                />
                {
                    errors.text && touched.text &&
                    <Typography variant='body2' mt={.5} color="#b71c1c">
                        {errors.text}
                    </Typography>
                }
            </Grid>
            <Grid item xs={12} mt={2}>
                {
                    errors.name || errors.email || errors.text ?
                        <Button variant="contained" disabled> ارسال </Button> :
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
import { Box } from '@mui/system';
import { TailSpin } from 'react-loader-spinner'
import React from 'react';

const Loader = () => {
    return (
        <Box
            width="100%"
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
        >
            <TailSpin
                height="100"
                width="100"
                color='grey'
                ariaLabel='loading'
            />
        </Box>
    );
};

export default Loader;
import { Box, Typography } from '@mui/material';
import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
    const error = useRouteError();
    console.log('RouteError sss: ', error)
    return (
    <Box sx={{textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        <Typography variant='h1' sx={{fontSize: '64px'}}>{error.status}, Oops!</Typography>
        <Typography paragraph sx={{margin: '30px 0'}}>Sorry, an unexpected error has occurred.</Typography>
        <Typography paragraph>
            <i>{error.statusText || error.message}</i>
        </Typography>
    </Box>
  )
}

export default ErrorPage
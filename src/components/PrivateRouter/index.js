import { Box } from '@mui/material';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/auth';

function PrivateRouter({children}) {
  const {auth} = useAuthContext();
  console.log('Auth: ', auth)
  return (
    <Box>
        {
            auth ? children : <Navigate to='/login' />
        }
    </Box>
  )
}

export default PrivateRouter
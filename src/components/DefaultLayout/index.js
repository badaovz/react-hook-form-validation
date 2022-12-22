import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React, { Children } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import { useAuthContext } from '../../contexts/auth';
import { styled } from '@mui/system';


function DefaultLayout({ children }) {
    const MyAppBar = styled(AppBar)({
        backgroundColor: '#3a9ac0' ,
    })
    const {logout} = useAuthContext();

    const nav = [
        {
            id: 1,
            title: 'Home',
            path: '/',
        },
        {
            id: 2,
            title: 'Products',
            path: '/products',
        },
        {
            id: 3,
            title: 'About',
            path: '/about',
        },
    ];

    return (
        <Box>
            <CssBaseline />
            <MyAppBar component='nav' position='relative'>
                <Toolbar>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                        <Typography paragraph mb={0}>
                            <Link to='/'>Logo</Link>
                        </Typography>
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{ display: 'flex' }}>
                                {nav.map((i) => (
                                    <Typography paragraph key={i.id} mr={2} mb={0}>
                                        <Link to={i.path}>{i.title}</Link>
                                    </Typography>
                                ))}
                            </Box>
                            <Typography paragraph ml={4} mb={0}>
                                <Link to='/login' onClick={logout}>Logout</Link>
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </MyAppBar>
            {children}
            <Footer />
        </Box>
    );
}

export default DefaultLayout;

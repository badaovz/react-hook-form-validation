import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, FormControl, FormLabel, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import InputField from '../../components/InputField';
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../contexts/auth';

function Login() {
    const navigate = useNavigate();
    const { getAuth, users } = useAuthContext();


    const schema = yup
        .object()
        .shape({
            username: yup
                .string()
                .required('username is required'),
            password: yup
                .string()
                .required('password is required'),
                
        })
        .required();
    const form = useForm({
        mode: 'all',
        resolver: yupResolver(schema),
    });

    const handleFormSubmit = (values) => {
        if(users.find(i => i.username === values.username && i.password === values.password)){
            getAuth();
            navigate('/');
        } else {
            window.alert('username or password not exacted!')
        }
        console.log('Values: ', values);
    };

    return (
        <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
            <form onSubmit={form.handleSubmit(handleFormSubmit)}>
                <FormControl>
                    <FormLabel sx={{ marginBottom: '20px', textAlign: 'center' }}>Login</FormLabel>
                    <InputField name='username' form={form} label='Username' />
                    <InputField name='password' form={form} label='Password' type='password' />
                    
                    <Button type='submit' variant='contained'>
                        Login
                    </Button>
                    <Box sx={{textAlign: 'left'}}>
                      <Typography paragraph sx={{margin: '10px 0'}}>Need a account?</Typography>
                      <Typography paragraph><Link to='/register' style={{textDecoration: 'underline', color: '#1565C0'}}>Sign up</Link></Typography>
                    </Box>
                </FormControl>
            </form>
        </Box>
    );
}

export default Login;


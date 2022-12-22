    import { Box, Button, FormControl, FormControlLabel, FormGroup, FormLabel, TextField, Typography } from '@mui/material';
    import React from 'react';
    import { useForm } from 'react-hook-form';
    import * as yup from 'yup';
    import { yupResolver } from '@hookform/resolvers/yup';
    import InputField from '../InputField';
    import CheckBox from '../CheckBox';

    function ValidateForm() {
        const schema = yup
            .object()
            .shape({
                fullname: yup.string().required('fullname is required'),
                username: yup
                    .string()
                    .required('username is required')
                    .min(6, 'username must be at least  6 characters')
                    .max(20, 'username must not exceed 20 characters'),
                email: yup.string().required('email is required').email('email is invalid'),
                password: yup
                    .string()
                    .required('password is required')
                    .min(6, 'password must be at least 6 character')
                    .max(40, 'password must not exceed 40 characters'),
                confirmPassword: yup
                    .string()
                    .required('confirm password is required')
                    .oneOf([yup.ref('password'), null], 'confirm password does not match'),
                acceptTerms: yup.bool().oneOf([true], 'accept terms is required'),
            })
            .required();
        const form = useForm({
            mode: 'all',
            resolver: yupResolver(schema),
        });

        const handleFormSubmit = (values) => {
            console.log('Values: ', values);
            window.alert('register success!')
        };

        return (
            <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
                <form onSubmit={form.handleSubmit(handleFormSubmit)}>
                    <FormControl>
                        <FormLabel sx={{ marginBottom: '20px', textAlign: 'center' }}>Register</FormLabel>
                        <InputField name='fullname' form={form} label='Fullname' />
                        <InputField name='username' form={form} label='Username' />
                        <InputField name='email' form={form} label='Email' />
                        <InputField name='password' form={form} label='Password' type='password' />
                        <InputField name='confirmPassword' form={form} label='Confirm password' type='password' />
                        <CheckBox name='acceptTerms' form={form} label='I have read and agree to the terms' />

                        <Button type='submit' variant='contained'>
                            register
                        </Button>
                    </FormControl>
                </form>
            </Box>
        );
    }

    export default ValidateForm;

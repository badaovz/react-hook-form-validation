import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

function InputField(props) {
    const { name, form } = props;
    const { control, formState } = form;
    const { errors, touchedFields } = formState;

    const hasError = touchedFields[name] && errors[name];
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <TextField
                    {...field}
                    {...props}
                    sx={{ marginBottom: '20px' }}
                    error={!!hasError}
                    helperText={errors[name]?.message}
                />
            )}
            defaultValue=''
        />
    );
}

export default InputField;

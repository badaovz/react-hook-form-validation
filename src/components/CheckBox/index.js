import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

function CheckBox(props) {
    const {name, form, label} = props; 
    const {errors} = form.formState;
    const hasError = errors[name]
  return (
    <Controller
        name={name}
        control={form.control}
        render={({field}) => <FormControl error={!!hasError} >
          <FormGroup>
            <FormControlLabel control={<Checkbox {...field} {...props} sx={{display: 'block'}} />} label={label} />
          </FormGroup>
          {(!!hasError) && <FormHelperText>{errors[name].message}</FormHelperText>}
        </FormControl>}
        defaultValue={false}
    />

  )
}

export default CheckBox
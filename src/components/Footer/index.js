import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <Box sx={{backgroundColor: '#24292f', color: '#fff', padding: '24px'}}>
        <Grid container sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Grid item >
                <Typography variant='h3' fontSize={24} gutterBottom>Product</Typography>
                <Typography paragraph>New Product</Typography>
                <Typography paragraph>Favorite Product </Typography>
                <Typography paragraph>All Product</Typography>
            </Grid>
            <Grid item>
                <Typography variant='h3' fontSize={24} gutterBottom>About us</Typography>
                <Typography paragraph>Community</Typography>
                <Typography paragraph>Location</Typography>
                <Typography paragraph>History</Typography>
            </Grid>
            <Grid item>
                <Typography variant='h3' fontSize={24} gutterBottom>Contact us</Typography>
                <Typography paragraph>+ 098****807</Typography>
                <Typography paragraph>+ 348****888</Typography>
                <Typography paragraph>email: dao*****@gmail.com</Typography>
            </Grid>
            <Grid item>
                <Typography variant='h3' fontSize={24} gutterBottom>Media</Typography>
                <Typography paragraph>Facebook</Typography>
                <Typography paragraph>Instagram</Typography>
                <Typography paragraph>Linkedin</Typography>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Footer
import { Box, Typography } from '@mui/material'
import React from 'react'
import DefaultLayout from '../../components/DefaultLayout'
import { Outlet } from 'react-router-dom'
import DefaultContent from '../../components/DefaultContent'

function Home() {
  return (
    <DefaultLayout>
      <Box m={3}>
        <Outlet />
      </Box>
    </DefaultLayout>
  )
}

export default Home
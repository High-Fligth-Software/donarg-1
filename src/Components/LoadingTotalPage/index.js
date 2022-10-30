import React from 'react'
import {Box, CircularProgress,Typography,Grid} from '@mui/material';
import './Loading.css'
const LoadingTotalPage = () => {
  return (
    <Box sx={{ display: 'flex', height: '50rem'}} >
        <Grid container alignItems="center"  justifyContent="center" direction="column" spacing={0.5}>
            <Grid item>
                <CircularProgress />
            </Grid>
            <Grid item>
                <Typography variant="subtitle1" gutterBottom>
                    Cargando...
                </Typography>
            </Grid>
        </Grid>
    </Box>
  )
}
export default LoadingTotalPage;
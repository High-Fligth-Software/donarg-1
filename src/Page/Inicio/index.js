import React from 'react'
import {Grid} from '@mui/material';

import { NavBar } from '../../Components/NavBar';

export const Inicio = () => {
    return (
        <Grid container direction="column">
            <Grid item xs={12} md={12} lg={12}>
                <NavBar/>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
                <Grid container  direction="row">
                    <Grid item xs={3} md={3} lg={3}>
                        <item><h1>Holaaaaaaaaaaaa</h1></item>
                    </Grid>
                    <Grid item xs={6} md={6} lg={6}>
                        <item><h1>Holaaaaaaaaaaaa</h1></item>
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                        <item><h1>Holaaaaaaaaaaaa</h1></item>
                    </Grid>
                </Grid>  
            </Grid>
        </Grid>
  )
}

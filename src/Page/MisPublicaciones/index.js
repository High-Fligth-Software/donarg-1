import React from 'react'
import { NavBar } from '../../Components/NavBar';
import {Grid} from '@mui/material';
import { BarraLateralDePerfil } from '../../Components/barraLateralDePerfil';
import { MiPublicacion } from '../../Components/MiPublicacion';
export const MisPublicaciones = () => {
  return (
    <>
        <NavBar/>
        <Grid container alignItems="flex-start" justifyContent="space-evenly"  direction="row" style={{marginTop:"0.1%"}} spacing={1}>
            <Grid item xs={12} md={2} lg={2} >
                    <BarraLateralDePerfil/>
            </Grid>
            <Grid item xs={12} md={7} lg={7} >
                <MiPublicacion/>
            </Grid>
        </Grid>
    </>
  )
}

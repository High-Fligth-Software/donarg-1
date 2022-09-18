import React from 'react'
import {Grid,Container} from '@mui/material';
import { NavBar } from '../../Components/NavBar';
import { BarraLateralDePerfil } from '../../Components/barraLateralDePerfil';
import { BarraLateralDeEmpresas } from '../../Components/barraLateralDeEmpresas';
export const Inicio = () => {
    return (
        <>
            <NavBar/>
                <Grid container alignItems="flex-start" justifyContent="center"  direction="row" style={{marginTop:"0.1%"}} spacing={1}>
                    <Grid item xs={2} md={2} lg={2} >
                            <BarraLateralDePerfil/>
                    </Grid>
                    <Grid item xs={6} md={6} lg={6}>
                        <Container style={{backgroundColor: 'white', borderRadius:"25px"}}>
                            <h1>Holaaaaaaaaaaaa</h1>
                        </Container>                            
                    </Grid>
                    <Grid item xs={2} md={2} lg={2}>
                        <BarraLateralDeEmpresas/>
                    </Grid>
                </Grid>                  
        </>
  )
}

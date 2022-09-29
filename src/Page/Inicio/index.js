import React from 'react'
import {Grid} from '@mui/material';
import { NavBar } from '../../Components/NavBar';
import { BarraLateralDePerfil } from '../../Components/barraLateralDePerfil';
import { BarraLateralDeEmpresas } from '../../Components/barraLateralDeEmpresas';
import { Publicacion } from '../../Components/Publicacion';
import { ComponenteFiltro } from '../../Components/componenteFiltro';
export const Inicio = () => {
    return (
        <>
            <NavBar/>
                <Grid container alignItems="flex-start" justifyContent="space-evenly"  direction="row" style={{marginTop:"0.1%"}} spacing={1}>
                    <Grid item xs={12} md={2} lg={2} >
                            <BarraLateralDePerfil/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Publicacion/>
                    </Grid>
                    <Grid item xs={12} md={2} lg={2}>
                        <Grid container direction="column" justifyContent="space-between" alignItems="center">
                                <Grid item>
                                    <ComponenteFiltro/>
                                </Grid>
                                <Grid item>
                                    <BarraLateralDeEmpresas/>
                                </Grid>
                        </Grid>                         
                    </Grid>
                </Grid>                  
        </>
  )
}

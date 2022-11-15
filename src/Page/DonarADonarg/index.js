import React from 'react'
import { NavBar } from '../../Components/NavBar';
import { BarraLateralDePerfil } from '../../Components/barraLateralDePerfil';
import {Grid, Container} from '@mui/material';
import './donarADonarg.css';

export const DonarADonarg = () => {
  return (
    <>
        <NavBar/>
        <Grid container alignItems="flex-start" justifyContent="space-evenly"  direction="row" style={{marginTop:"0.1%"}} spacing={1}>
            <Grid item xs={12} md={2} lg={2}>
                <BarraLateralDePerfil/>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <Container className="contenedorDeDonarADonarg" style={{color:"rgb(25, 118, 210)"}}>
                    <h1>¡Ayudanos a ayudar!</h1>
                    <p style={{margin:"0px"}}>Como es de común conocimiento, donARG es un producto 100% independiente.</p>
                    <p>Esta iniciativa surgio por estudiantes de la universidad tecnologica y hoy en dia los unicos medios con los que contamos para subsistir son algunas empresas que nos ayudan y ustedes, nuestra comunidad.</p>
                    <p>Por este motivo, contamos con vos para ayudarnos realizando donaciones a donARG.</p>
                    <h3>CBU de donARG: 2015037411100086045985</h3>
                    <h3>Alias de donARG: DONARG.AYUDA.GRACIAS</h3>
                </Container>
                        
            </Grid>
            <Grid item xs={12} md={2} lg={2}>

            </Grid>
        </Grid>
    </>
  )
}

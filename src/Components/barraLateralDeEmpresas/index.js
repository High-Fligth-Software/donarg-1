import React from 'react'
import {Grid, Typography,Container} from '@mui/material';
export const BarraLateralDeEmpresas = () => {
    const empresasData = require('../../Mocks/empresas.json')
  return (
    <Container style={{backgroundColor: 'white', borderRadius:"25px"}} >
        <Grid container  direction="row" alignItems="center" justifyContent="center" spacing={1} style={{marginTop:"0.5%"}}>
            <Grid item xs={12} md={12} lg={12} style={{textAlign: "center",}}>
                <Typography variant="h6" gutterBottom component="div">
                    <b>Nuestros colaboradores</b>
                </Typography>
            </Grid>
            {empresasData.data.empresas.map((empresa)=>{
                return(
                    <Grid item xs={5} md={5} lg={5}>
                        <img src={empresa.fotoDeLaEmpresa}  style={{width: "70px", height: "70px"}}/>
                    </Grid>
                )
            })}
        </Grid>
    </Container>
  )
}

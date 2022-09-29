import React from 'react'
import {Grid} from '@mui/material';
export const BarraLateralDeEmpresas = () => {
    const empresasData = require('../../Mocks/empresas.json')
  return (
        <Grid container  direction="row" alignItems="center" justifyContent="center" spacing={2} style={{marginTop:"0.5%"}}>
            {empresasData.data.empresas.map((empresa)=>{
                return(
                    <Grid item xs={4} md={4} lg={4}>
                        <img src={empresa.fotoDeLaEmpresa}  style={{width: "70px", height: "70px"}}/>
                    </Grid>
                )
            })}
        </Grid>
  )
}

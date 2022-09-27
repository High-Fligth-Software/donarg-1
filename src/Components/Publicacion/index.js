import React from 'react'
import {Grid,Container} from '@mui/material';
import './publicacion.css'

export const Publicacion = () => {
    const publicaciones = require('../../Mocks/Publicaciones.json')
  return (
    <div>
        {
            publicaciones.data.publicaciones.map((publicacion) => {
                return(
                    <Container className="contenedorDePublicaciones" style={{borderRadius:"25px", marginTop:"2%"}}>
                        <Grid container direction="row" spacing={1}>
                            <Grid item xs={4} md={4} lg={4}>
                                <img src={publicacion.urlImagen}  style={{width: "200px", height: "150px", borderRadius:"25px", border:"2px solid ", color:"#007FFF"}}/>
                            </Grid>
                            <Grid item xs={7} md={7} lg={7}>
                                <Grid container direction="column" spacing={1}>
                                    <Grid item xs={12} md={12} lg={12}>
                                        <h3>{publicacion.descripcion}</h3>
                                    </Grid>
                                    <Grid item xs={12} md={12} lg={12}>
                                        <Grid container direction="row">
                                            <Grid item xs={6} md={6} lg={6}>
                                                {publicacion.usuario.nombre}
                                            </Grid>
                                            <Grid item xs={6} md={6} lg={6}>
                                                {publicacion.usuario.localidad}
                                            </Grid>
                                        </Grid>                                        
                                    </Grid>                                   
                                </Grid>
                            </Grid>
                            <Grid item  xs={1} md={1} lg={1}>
                                {publicacion.tipoPublicacion === 1 ?<h5>Peticion</h5> : <h5>Donacion</h5>}
                            </Grid>
                        </Grid>
                    </Container>                            
                )
            })
        }
    </div>
  )
}

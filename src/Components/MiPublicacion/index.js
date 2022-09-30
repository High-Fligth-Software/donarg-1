import React from 'react'
import {Grid,Container,Button,Typography,Rating} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
export const MiPublicacion = () => {
    const misPublicaciones = require('../../Mocks/MisPublicaciones.json')
  return (
    <div>
        {
            misPublicaciones.data.publicaciones.map((publicacion)=>{
                return(
                    <>
                        <Container className="contenedorDePublicaciones" style={{borderRadius:"25px", marginTop:"2%"}}>
                            <Grid container direction="row">
                                <Grid item xs={3} md={3} lg={3}>
                                    <img src={publicacion.urlImagen}  style={{width: "200px", height: "150px", borderRadius:"25px", border:"2px solid ", color:"#007FFF"}} alt="error image"/>
                                </Grid>
                                <Grid item xs={6} md={6} lg={6}>
                                    <Grid container direction="column">
                                        <Grid item xs={12} md={12} lg={12}>
                                            <h3>{publicacion.descripcion}</h3>
                                        </Grid>
                                        <Grid item xs={6} md={6} lg={6}>
                                            <>
                                                <h5><b>Tipo de publicacion: </b> {publicacion.tipoPublicacion === 1 ? "Peticion" : "Donacion"}</h5> 
                                            </>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item  xs={3} md={3} lg={3}>
                                    <Grid container direction="column">
                                        <Grid item xs={12} md={12} lg={12}>
                                            {publicacion.finalizo ?<h5>Finalizada</h5> 
                                            : 
                                            <Grid container direction="row" style={{marginTop:"3%"}}>
                                                <Grid item xs={12} md={6} lg={6}>
                                                    <Button variant="contained" size="sm"><EditIcon fontSize="small"/> Editar</Button>
                                                </Grid>
                                                <Grid item xs={12} md={6} lg={6}>
                                                    <Button variant="contained" color="error" size="sm"><DeleteIcon fontSize="small"/> Eliminar</Button>
                                                </Grid>                                        
                                            </Grid>
                                            }
                                        </Grid>
                                        <Grid item xs={12} md={12} lg={12}>
                                                <Grid container direction="column">
                                                    {publicacion.beneficiarios ? 
                                                        publicacion.beneficiarios.map((beneficiario)=>{
                                                            return(
                                                                <>
                                                                    <Typography component="legend">{beneficiario.nombre}</Typography>
                                                                    <Rating name="read-only" value={beneficiario.puntuacion} readOnly />
                                                                </>
                                                            )
                                                    }):null}
                                                    {publicacion.donadores ? 
                                                        publicacion.donadores.map((donadores)=>{
                                                            return(
                                                               <>
                                                                <Typography component="legend">{donadores.nombre}</Typography>
                                                                <Rating name="read-only" value={donadores.puntuacion} readOnly />
                                                               </>
                                                            )
                                                    }): null} 
                                                </Grid>
                                            </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Container>
                    </>
                )
            })
        }
    </div>                       
  )
}

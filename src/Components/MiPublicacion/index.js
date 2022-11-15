import React, {useState, useEffect} from 'react'
import {Grid,Container,Button,Typography,Rating} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ModalComponent } from "../Modal";
export const MiPublicacion = () => {
    const [misPublicaciones, setMisPublicaciones] = useState([])
    const [modalEliminar, setModalEliminar] = useState(false)
    const [modalEliminacionExitosa, setModalEliminacionExitosa] = useState(false)
    const [idDelete, setIdDelete] = useState(0)
    const eliminarPublicacion = (id)=>{
        setModalEliminar(true)
        setIdDelete(id)
    }
    const confirmacionEliminacion = ()=>{
        const filteredLibraries = misPublicaciones.filter((item) => item.idPublicacion !== idDelete)
        setMisPublicaciones(filteredLibraries)
        setModalEliminar(false)
        setModalEliminacionExitosa(true)
    }
    useEffect(()=>{
        setMisPublicaciones(require('../../Mocks/MisPublicaciones.json').data.publicaciones)
    },[])
  return (
    <div>
        {
            misPublicaciones.map((publicacion)=>{
                return(
                    <>
                        <Container className="contenedorDePublicaciones" style={{borderRadius:"25px", marginTop:"2%"}}>
                            <Grid container direction="row">
                                <Grid item xs={3} md={3} lg={3}>
                                    <img src={publicacion.urlImagen} alt="error"  style={{width: "200px", height: "150px", borderRadius:"25px", border:"2px solid ", color:"#007FFF"}} />
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
                                                    <Button variant="contained" color="error" size="sm" onClick={()=>{eliminarPublicacion(publicacion.idPublicacion)}}><DeleteIcon fontSize="small"/> Eliminar</Button>
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

        <ModalComponent abrir={modalEliminar}>
            <div>
                <Grid container spacing={2} direction="column"> 
                    <Grid item xs={12} md={12} lg={12} style={{textAlign:"center"}}>
                        <Typography variant="h5" gutterBottom component="div">
                                <b>¿Esta seguro que desea eliminar esta publicación?</b>
                        </Typography>
                    </Grid>
                    <Grid item style={{marginTop:"10%"}} xs={12} md={12} lg={12}>
                        <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
                            <Grid item xs={3} md={3} lg={3}>
                                <Button  variant="contained" color="error" onClick={() =>{confirmacionEliminacion()}}>Eliminar</Button>
                            </Grid>
                            <Grid item xs={3} md={3} lg={3}>
                                <Button  variant="contained" onClick={() =>{setModalEliminar(false)}}>Cancelar</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </ModalComponent>

        <ModalComponent abrir={modalEliminacionExitosa}>
            <div>
                <Grid container spacing={2} direction="column" alignItems="center" justifyContent="space-between"> 
                    <Grid item xs={12} md={12} lg={12} style={{textAlign:"center"}}>
                        <Typography variant="h5" gutterBottom component="div">
                                <b>La publicación se elimino correctamente</b>
                        </Typography>
                    </Grid>
                    <Grid item style={{marginTop:"10%"}} xs={12} md={12} lg={12}>
                        <Button  variant="contained" onClick={() =>{setModalEliminacionExitosa(false)}}>¡Perfecto!</Button>
                    </Grid>
                </Grid>
            </div>
        </ModalComponent>
    </div>                       
  )
}

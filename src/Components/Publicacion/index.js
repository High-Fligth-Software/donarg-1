import React, {useState,useContext, useEffect} from 'react'
import { ContextReload } from "../../Context/ContextReload";
import {Grid,Container} from '@mui/material';
import { ContextFilter } from '../../Context/ContextFilter';
import  ModalVerPublicacionNoPropia from "../ModalVerPublicacionNoPropia";
import { GetPost } from '../../Services/Publicacion/GetPost';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import './publicacion.css'

export const Publicacion = () => {
    const {filtroTipoDePublicacion} = useContext(ContextFilter)
    const {reload} = useContext(ContextReload)
    const [modalVerPublicacion, setModalVerPublicacion] = useState(false)
    const [publicacionSeleccionada, setPublicacionSeleccionada] = useState('')
    const [publicacionesBack, setPublicacionesBack] = useState([])
    const mostrarPublicacion=(publicacion)=>{
        setPublicacionSeleccionada(publicacion)
        setModalVerPublicacion(true)        
    }    
    const taerPublicaciones = ()=>{
        GetPost() 
        .then((response)=>{setPublicacionesBack(response)})
        .catch((err)=>{console.log(err)})    
    }
    useEffect(()=>{
        taerPublicaciones();
    },[reload,publicacionSeleccionada])
  return (
    <div>
        {
            publicacionesBack.map((publicacion) => {
                return(
                    publicacion.type.id === filtroTipoDePublicacion || filtroTipoDePublicacion=== 0 ? 
                    <Container className="contenedorDePublicaciones" style={{borderRadius:"25px", marginTop:"2%"}} onClick={()=>{mostrarPublicacion(publicacion.id)}}>
                        <Grid container direction="row" spacing={1}>
                            <Grid item xs={4} md={4} lg={4}>
                                <img src={"data:image/png;base64,"+publicacion.images[0].base} alt="imagen de publicacion"  style={{width: "200px", height: "150px", borderRadius:"25px", border:"2px solid ", color:"#007FFF"}}/>
                            </Grid>
                            <Grid item xs={7} md={7} lg={7}>
                                <Grid container direction="column" spacing={1}>
                                    <Grid item xs={12} md={12} lg={12}>
                                        <h3>{publicacion.title}</h3>
                                    </Grid>
                                    <Grid item xs={12} md={12} lg={12}>
                                        <Grid container direction="row">
                                            <Grid item xs={6} md={6} lg={6}>
                                                {publicacion.author.email}
                                            </Grid>
                                            <Grid item xs={6} md={6} lg={6}>
                                                {publicacion.author.locality.name}
                                            </Grid>
                                        </Grid>                                        
                                    </Grid>
                                    <Grid item xs={12} md={12} lg={12} style={{display:"flex", alignItems:"center"}}>
                                        <p style={{marginRight:"12px"}}>Movilidad:</p> {publicacion.movility ? <ThumbUpIcon fontSize="small"/> : <ThumbDownIcon fontSize="small"/>}
                                    </Grid>                                   
                                </Grid>
                            </Grid>
                            <Grid item  xs={1} md={1} lg={1}>
                                {publicacion.type.id === 1 ?<h5>Donacion</h5> : <h5>Peticion</h5>}
                            </Grid>
                        </Grid>
                    </Container> : null                           
                )
            })
        }
        {publicacionSeleccionada ? <ModalVerPublicacionNoPropia publicacionId={publicacionSeleccionada} abrirModal={modalVerPublicacion} closeModal={setModalVerPublicacion}/> : null}
               
    </div>
  )
}

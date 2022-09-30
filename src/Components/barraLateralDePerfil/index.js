import React from 'react'
import {Grid,Typography, Container, Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import donarg from '../../imagenes/donARG.PNG'
import './barraLateralDePerfil.css'
import { useNavigate  } from 'react-router-dom'

export const BarraLateralDePerfil = () => {
    const userData = require('../../Mocks/user.json')
    const navigate = useNavigate();
  return (
    <Container style={{backgroundColor: 'white', borderRadius:"25px", marginTop:"3%"}} >
        <Grid container alignItems="center" justifyContent="flex-start" direction="column" spacing={0.5}>
                <Grid item xs={12} md={12} lg={12}>
                    <img alt="foto de perfil" src={userData.data.fotoDePerfil} style={{width: "80px", height: "80px", borderRadius: "160px",}}/>
                 </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Typography variant="h6" gutterBottom component="div">
                        <b>{userData.data.userName}</b>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={12} style={{textAlign: "center",}}>
                    <Typography variant="h7" gutterBottom component="div" style={{color:"grey"}}>
                        {userData.data.descripcion}
                    </Typography>
                </Grid>              
        </Grid>
        <Divider/>
        <Grid className="presionablesLaterales" container direction="row"  justifyContent="flex-start" onClick={()=>{console.log("Mostrar perfil")}} spacing={1}>
                        <Grid item>
                            <PersonIcon sx={{ fontSize: 20 }} />
                        </Grid>
                        <Grid item>
                            <Typography variant="h7" gutterBottom component="div">
                                Mira tu perfil
                            </Typography>
                        </Grid>
        </Grid>
        <Grid className="presionablesLaterales" container direction="row"  justifyContent="flex-start" onClick={()=>{console.log("Mostrar perfil")}} spacing={1}>
                        <Grid item>
                            <VolunteerActivismIcon sx={{ fontSize: 20 }} />
                        </Grid>
                        <Grid item>
                            <Typography variant="h7" gutterBottom component="div">
                                Ayudanos a crecer
                            </Typography>
                        </Grid>
        </Grid>
        <Grid className="presionablesLaterales" container direction="row"  justifyContent="flex-start" onClick={()=>{navigate('/MisPublicaciones')}} spacing={1}>
                        <Grid item>
                            <TurnedInIcon sx={{ fontSize: 20 }} />
                        </Grid>
                        <Grid item>
                            <Typography variant="h7" gutterBottom component="div">
                                Mis publicaciones
                            </Typography>
                        </Grid>
        </Grid>
        <Divider/>
        <Grid container direction="row"  justifyContent="center" style={{marginTop:"1%"}}>
            <Grid item>
                <img src={donarg} alt="hola" width="200px" height="50px"/>
            </Grid>
        </Grid>
    </Container>

  )
}

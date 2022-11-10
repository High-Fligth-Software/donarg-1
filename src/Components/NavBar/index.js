import React, {useState} from 'react'
import {Grid, TextField, Stack} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import donarg from '../../imagenes/sodapdf-converted.png'
import { ModalCrearPublicacion } from "../ModalCrearPublicacion";
import './NavBar.css'
import { useNavigate  } from 'react-router-dom'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SideDrawerConfiguraciones from '../SideDrawerConfiguraciones';
export function NavBar() {
  const navigate = useNavigate();
  const [modalCrearPublicacion, setModalCrearPublicacion] = useState(false)
  return (
    <>
      <Grid container  direction="row"   alignItems="center" justifyContent="space-around" spacing={2} style={{backgroundColor:"#1976d2", minHeight:"80px", boxShadow:"1px 1px 2px black"}}>
        <Grid item xs={2} md={2} lg={2}>
          <img src={donarg} alt="hola" width="170px" height="40px"/>
        </Grid>
        <Grid item xs={3} md={3} lg={3} >
          <TextField fullWidth id="buscar" label="Buscar" variant="filled" style={{backgroundColor:"white", borderRadius:"6px"}} size="small" InputProps={{endAdornment:(<SearchIcon/>)}}/>
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
            <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={6}
            style={{marginRight:"1%"}}
            >
              <AddIcon className="iconStyle" sx={{ fontSize: 30 }} onClick={()=>{setModalCrearPublicacion(true)}}/>
              <NotificationsIcon className="iconStyle" sx={{ fontSize: 30 }} onClick={()=>{console.log('Notificaciones')}}/>
              <HomeIcon  className="iconStyle" sx={{ fontSize: 30 }} onClick={()=>{navigate("/Inicio")}}/>
              <SettingsIcon className="iconStyle" sx={{ fontSize: 30 }} onClick={()=>{console.log("Configuraciones")}}/>
              <LogoutIcon className="iconStyle" sx={{ fontSize: 30 }} onClick={()=>{navigate("/")}}/>
            </Stack>
        </Grid>
      </Grid>

      <ModalCrearPublicacion abrirModal={modalCrearPublicacion} closeModal={setModalCrearPublicacion}/>
      
    </>

  );
}
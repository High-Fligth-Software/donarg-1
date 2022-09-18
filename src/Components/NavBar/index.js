import * as React from "react";
import {Grid, TextField, Stack} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import './NavBar.css'

export function NavBar() {
  return (
    <Grid container  direction="row"   alignItems="center" spacing={2} style={{backgroundColor:"#1976d2", minHeight:"80px", boxShadow:"1px 1px 2px black"}}>
      <Grid item xs={2} md={2} lg={2}>
        <img src="https://1000marcas.net/wp-content/uploads/2020/01/iPhone-Logo-2007.png" alt="hola" width="100px" height="50px"/>
      </Grid>
      <Grid item xs={3} md={3} lg={3} >
        <TextField fullWidth id="buscar" label="Buscar" variant="filled" style={{backgroundColor:"white", borderRadius:"6px"}} size="small" InputProps={{endAdornment:(<SearchIcon/>)}}/>
      </Grid>
      <Grid item xs={7} md={7} lg={7}>
          <Stack
           direction="row"
           justifyContent="flex-end"
           alignItems="center"
           spacing={6}
           style={{marginRight:"1%"}}
           >
            <AddIcon className="iconStyle" sx={{ fontSize: 30 }} onClick={()=>{console.log("Crear publicacion")}}/>
            <PersonIcon className="iconStyle" sx={{ fontSize: 30 }} onClick={()=>{console.log("Perfil del usuario")}}/>
            <SettingsIcon className="iconStyle" sx={{ fontSize: 30 }} onClick={()=>{console.log("Configuraciones")}}/>
            <LogoutIcon className="iconStyle" sx={{ fontSize: 30 }} onClick={()=>{console.log("Salir")}}/>
          </Stack>
      </Grid>
    </Grid>
  );
}
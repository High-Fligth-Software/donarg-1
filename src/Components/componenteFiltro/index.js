import React, {useState} from 'react'
import {Container, FormControlLabel,Checkbox, Grid, Typography, MenuItem, Select,FormControl} from '@mui/material';

export const ComponenteFiltro = () => {
    const [localidad, setLocalidad] = useState('Todas')
    const nombreLocalidades = [
        'Todas',
        'San Miguel de Tucumán',
        'Alderetes',
        'Yerba buena',
        'Tafi Viejo',
        'Banda del rio Sali',
        'Aguilares',
        'Concepcion',
        'Tafi Del Valle',
        'San Andres',
        'Lules',
      ];
  return (
    <Container style={{borderRadius:"25px", marginTop:"2%", backgroundColor:"white"}}>
        <Grid container direction="column">
            <Grid item style={{textAlign:"center"}}>
                <Typography variant="h5" gutterBottom component="div">
                    <b>Filtros</b>
                </Typography> 
            </Grid>
            <Grid item >
                <Typography variant="h7" gutterBottom component="div">
                    <b>Tipo de publicacion</b>
                </Typography> 
            </Grid>
            <Grid item>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Todas" />
            </Grid>
            <Grid item>
                <FormControlLabel control={<Checkbox />} label="Peticion" />
            </Grid>
            <Grid item style={{marginBottom:"4%"}}>
                <FormControlLabel control={<Checkbox />} label="Donacion" />
            </Grid>
            <Grid item style={{marginBottom:"4%"}}>
                <Typography variant="h7" gutterBottom component="div">
                    <b>Localidad</b>
                </Typography> 
            </Grid>
            <Grid item style={{marginBottom:"4%"}}>      
                <FormControl >
                    <Select
                        sx={{width:"250px"}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={localidad}
                        onChange={(e)=>{setLocalidad(e.target.value)}}
                        >
                        {nombreLocalidades.map((nombre)=>{
                            return(
                                <MenuItem value={nombre}>{nombre}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item >
                <Typography variant="h7" gutterBottom component="div">
                    <b>Movilidad</b>
                </Typography> 
            </Grid>
            <Grid item>
                <FormControlLabel control={<Checkbox defaultChecked />} label="No" />
            </Grid>
            <Grid item>
                <FormControlLabel control={<Checkbox />} label="Si" />
            </Grid>
        </Grid>        
    </Container>
  )
}

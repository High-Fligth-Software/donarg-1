import React, {useState, useContext} from 'react'
import {Container, FormControlLabel,Checkbox, Grid, Typography, MenuItem, Select,FormControl} from '@mui/material';
import { ContextFilter } from '../../Context/ContextFilter';
export const ComponenteFiltro = () => {
    const [localidad, setLocalidad] = useState('Todas')
    const [chekcTodos, setCheckTodos]=useState(true)
    const [chekcDonacion, setCheckDonacion]=useState(false)
    const [chekcPeticion, setCheckPeticion]=useState(false)
    const {setFiltroTipoDePublicacion} = useContext(ContextFilter)
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
    const checkContol=(valueCheck)=>{
        if(valueCheck===0){
            setCheckTodos(true)
            setCheckDonacion(false)
            setCheckPeticion(false)
            setFiltroTipoDePublicacion(0)
        }else if(valueCheck===1){
            setCheckPeticion(true)
            setCheckTodos(false)
            setCheckDonacion(false)
            setFiltroTipoDePublicacion(2)
        }else if(valueCheck===2){
            setCheckDonacion(true)
            setCheckPeticion(false)
            setCheckTodos(false)
            setFiltroTipoDePublicacion(1)
        }
    }
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
                <FormControlLabel control={<Checkbox checked={chekcTodos}/>} label="Todas" onChange={()=>{checkContol(0)}}/>
            </Grid>
            <Grid item>
                <FormControlLabel control={<Checkbox checked={chekcPeticion}/>} label="Peticion" onChange={()=>{checkContol(1)}}/>
            </Grid>
            <Grid item style={{marginBottom:"4%"}}>
                <FormControlLabel control={<Checkbox  checked={chekcDonacion}/>} label="Donacion" onChange={()=>{checkContol(2)}}/>
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

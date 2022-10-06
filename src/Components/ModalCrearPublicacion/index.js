import React, {useState, useEffect} from 'react'
import { ModalComponent } from '../Modal'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import CloseIcon from '@mui/icons-material/Close';
import {Grid,Divider, TextField, Typography, Button,FormControlLabel,FormControl,Select,MenuItem,Checkbox} from '@mui/material';

export const ModalCrearPublicacion = (props) => {
    const [itemsDonacion, setItemsDonacion] = useState([]);
    const [objeto, setObjeto] = useState('');
    const [categoria, setCategoria] = useState('Otros');
    const [cantidad, setCantidad] = useState('');
    const agregarItems = ()=>{
        console.log({"objeto":{objeto}, "categoria":{categoria}, "cantidad":{cantidad}})
        setItemsDonacion(current =>[...current,{"objeto":{objeto}, "categoria":{categoria}, "cantidad":{cantidad}}])
    }
    useEffect(()=>{
        console.log(itemsDonacion)

    },[itemsDonacion])
    const itemsCategorias = [
        'Alimentos no perecederos',
        'Ropa',
        'Libreria',
        'Otros',
      ];
    return (
    <ModalComponent abrir={props.abrirModal} width={1500} height={600}>
        <>
            <Grid container direction="row" justifyContent="flex-start"  sx={{ width: 1600, height: 600}}>
                <Grid item xs={12} md={3} lg={3} style={{display: 'flex', alignItems: 'center', justifyContent:"center"}}>
                    <AddAPhotoIcon  sx={{ width: 200, height: 200,  cursor:"pointer", }}/>
                </Grid>
                <Divider orientation="vertical" flexItem fullheight></Divider>
                <Grid item xs={7} md={7} lg={7}>
                    <Grid container direction="column" sx={{marginLeft:"3%"}} spacing={1}>
                        <Grid item xs={12} md={12} lg={12}>
                            <Typography variant="h5" gutterBottom component="div">
                                <b>Información de tú publicación</b>
                            </Typography>        
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <TextField id="titulo" label="Título" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <TextField
                            id="descripcionPublicacion"
                            label="Describe tu publicación"
                            multiline
                            maxRows={6}
                            fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <Grid container direction="row">
                                <Grid item xs={6} md={6} lg={6}>
                                    <Grid container direction="column">
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
                                </Grid>
                                <Grid item xs={6} md={6} lg={6}>
                                    <Grid container direction="column">
                                        <Grid item >
                                            <Typography variant="h7" gutterBottom component="div">
                                                <b>Tipo de publicacion</b>
                                            </Typography> 
                                        </Grid>
                                        <Grid item>
                                            <FormControlLabel control={<Checkbox />} label="Peticion" />
                                        </Grid>
                                        <Grid item style={{marginBottom:"4%"}}>
                                            <FormControlLabel control={<Checkbox />} label="Donacion" />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>       
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <Typography variant="h5" gutterBottom component="div">
                                <b>Especificar items</b>
                            </Typography>        
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <Grid container direction="row" spacing={1}>
                                <Grid item xs={4} md={4} lg={4}>
                                    <TextField id="objeto" label="Objeto" variant="outlined" fullWidth onChange={(e)=>{setObjeto(e.target.value)}}/>
                                </Grid>
                                <Grid item xs={4} md={4} lg={4}>
                                    <FormControl >
                                        <Select
                                            sx={{width:"300px"}}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={categoria}
                                            onChange={(e)=>{setCategoria(e.target.value)}}
                                            >
                                            {itemsCategorias.map((item)=>{
                                                return(
                                                    <MenuItem value={item}>{item}</MenuItem>
                                                )
                                            })}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={2} md={2} lg={2}>
                                    <TextField id="cantidad" label="Cantidad" variant="outlined" fullWidth onChange={(e)=>{setCantidad(e.target.value)}}/>
                                </Grid>
                                <Grid item xs={2} md={2} lg={2} style={{display: 'flex', alignItems: 'center'}}>
                                    <Button fullWidth variant="contained" size="lg" onClick={() =>{ agregarItems();}}>Agregar</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1} md={1} lg={1} style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Grid container direction="column" justifyContent="space-between" alignItems="flex-end">
                        <Grid item>
                            <CloseIcon sx={{cursor:"pointer"}} onClick={()=>{props.closeModal(false)}}/>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" size="sm">Crear</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    </ModalComponent>
  )
}

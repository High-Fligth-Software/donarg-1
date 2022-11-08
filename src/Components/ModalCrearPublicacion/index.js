import React, {useState, useEffect} from 'react'
import { ModalComponent } from '../Modal'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import CloseIcon from '@mui/icons-material/Close';
import {Grid,Divider, TextField, Typography, Button,FormControlLabel,FormControl,Select,MenuItem,Checkbox} from '@mui/material';
import { CrearPost } from '../../Services/CrearPublicacion/CrearPublicacion';
export const ModalCrearPublicacion = (props) => {
    const [itemsDonacion, setItemsDonacion] = useState([]);
    const [objeto, setObjeto] = useState('');
    const [categoria, setCategoria] = useState('Otros');
    const [cantidad, setCantidad] = useState('');
    const [image, setImage] = useState("");
    const [chekcMovilidadSi, setCheckMovilidadSi]=useState(false)
    const [chekcMovilidadNo, setCheckMovilidadNo]=useState(true)
    const [chekcDonacion, setCheckDonacion]=useState(false)
    const [chekcPeticion, setCheckPeticion]=useState(true)
    const [titulo,setTitulo]= useState("")
    const [descripcion,setDescripcion]= useState("")

    async function onButtonClicked(){
        let contentElement = document.getElementById("content");
        let files = await selectFile("image/*", true);
        const file =  files.map(file => `"${URL.createObjectURL(file)}"`);
        setImage(file)
        //Tambien se puede usar un valor porcentual que se adapte a la imagen
        contentElement.innerHTML = files.map(file => `<img src="${URL.createObjectURL(file)}" style="width: 300px; height: 500px; border-radius:20px;">`).join('');
    }
    function selectFile (contentType, multiple){
        return new Promise(resolve => {
            let input = document.createElement('input');
            input.type = 'file';
            input.multiple = multiple;
            input.accept = contentType;
    
            input.onchange = _ => {
                let files = Array.from(input.files);
                if (multiple)
                    resolve(files);
                else
                    resolve(files[0]);
            };
            input.click();
        });
    }
    const agregarItems = ()=>{
        setItemsDonacion(current =>[...current,{"description":objeto,"cantidad":cantidad}])
    }
    useEffect(()=>{
        console.log(itemsDonacion)
    },[])
    const itemsCategorias = [
        'Alimentos no perecederos',
        'Ropa',
        'Libreria',
        'Otros',
      ];
      const checkMovilidad = (bandera)=>{
        if(bandera===0){
            setCheckMovilidadNo(true)
            setCheckMovilidadSi(false)
        }else{
            setCheckMovilidadNo(false)
            setCheckMovilidadSi(true)
        }
      }
      const checkTipoPublicacion = (bandera)=>{
        if(bandera===0){
            setCheckPeticion(true)
            setCheckDonacion(false)
        }else{
            setCheckPeticion(false)
            setCheckDonacion(true)
        }
      }

      const crearPublicacion = ()=>{
       /*  let formData = new FormData();
        formData.append("hola","hola") */
        
        const datosPublicacion = {
            "LinesPostDto": itemsDonacion,
            "title": titulo,
            "content": descripcion,
            "type": chekcPeticion ? 1 : 2,
            "category" : 1

        }
        CrearPost(datosPublicacion,image,setImage)
      }
    return (
    <ModalComponent abrir={props.abrirModal} width={1500} height={600}>
        <>
            <Grid container direction="row" justifyContent="flex-start"  sx={{ width: 1600, height: 600}}>
                <Grid item xs={12} md={3} lg={3} style={{display: 'flex', alignItems: 'center', justifyContent:"center"}}>
                    {image === '' ? 
                        <AddAPhotoIcon  sx={{ width: 200, height: 200,  cursor:"pointer", }} onClick={()=>{onButtonClicked()}}/>
                        :
                        null
                    }
                    <div id="content" style={{cursor:"pointer"}} onClick={()=>{onButtonClicked()}}></div>
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
                            <TextField id="titulo" label="Título" variant="outlined" fullWidth onChange={(e)=>{setTitulo(e.target.value)}}/>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <TextField
                            id="descripcionPublicacion"
                            label="Describe tu publicación"
                            multiline
                            maxRows={6}
                            fullWidth
                            onChange={(e)=>{setDescripcion(e.target.value)}}
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
                                            <FormControlLabel control={<Checkbox checked={chekcMovilidadNo} />} label="No" onClick={()=>{checkMovilidad(0)}}/>
                                        </Grid>
                                        <Grid item>
                                            <FormControlLabel control={<Checkbox checked={chekcMovilidadSi}/>} label="Si" onClick={()=>{checkMovilidad(1)}}/>
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
                                            <FormControlLabel control={<Checkbox  checked={chekcPeticion}/>} label="Peticion" onClick={()=>{checkTipoPublicacion(0)}}/>
                                        </Grid>
                                        <Grid item style={{marginBottom:"4%"}}>
                                            <FormControlLabel control={<Checkbox checked={chekcDonacion}/>} label="Donacion" onClick={()=>{checkTipoPublicacion(1)}}/>
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
                            <Button variant="contained" size="sm"  onClick={()=>{crearPublicacion();}}>Crear</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    </ModalComponent>
  )
}

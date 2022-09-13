import React ,{useState} from 'react'
import { Grid, Typography, Button, TextField, Avatar} from '@mui/material';
import { useNavigate  } from 'react-router-dom'
import { ModalComponent } from '../../Components/Modal';
import donarg from '../../imagenes/donARG.PNG'

export const CrearUsuarioImagen = () => {
    const navigate = useNavigate();
    const [modalCreacionCorrecta, setModalCreacionCorrecta] = useState(false)
    const [perfilImage, setPerfilImage] = useState("");
    async function onButtonClicked(){
        let contentElement = document.getElementById("content");
        let files = await selectFile("image/*", true);
        const file =  files.map(file => `"${URL.createObjectURL(file)}"`);
        setPerfilImage(file[0])
        //Tambien se puede usar un valor porcentual que se adapte a la imagen
        contentElement.innerHTML = files.map(file => `<img src="${URL.createObjectURL(file)}" style="width: 200px; height: 200px; border-radius:160px; border:3px solid #666;">`).join('');
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
  return (
    <>
        <div class="LoginForm">
            <div class="divLogo">
                <img src={donarg} alt="hola" width="300px" height="70px"/>
            </div>
            <Grid container direction="column" spacing={3} style={{marginTop:"4%"}}>
                <Grid item xs={12} md={12} lg={12}>
                    <Typography variant="h5" gutterBottom component="div">
                        <b>Tú usuario</b>
                    </Typography>        
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <TextField id="usuario" label="Usuario" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <TextField id="contraseña" label="Contraseña" variant="outlined"  type='password' fullWidth />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <TextField id="repetirContraseña" label="Repita su contraseña" variant="outlined"  type='password' fullWidth />
                </Grid>
            </Grid>
            <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center" style={{marginTop:"4%"}}>
                <Grid item xs={12} md={12} lg={12}>
                    <Typography variant="h5" gutterBottom component="div">
                        <b>¿ Desea agregar una foto de perfil ?</b>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    {perfilImage === '' ? 
                        <Avatar
                        sx={{ width: 100, height: 100,  cursor:"pointer"}}
                        onClick={()=>{onButtonClicked()}}
                        />:null
                    }
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <div id="content" style={{cursor:"pointer", display: "flex", justifyContent: "center"}} onClick={()=>{onButtonClicked()}}></div>
                </Grid>
            </Grid>
            <div style={{marginTop:"4%"}}>
                <Button fullWidth variant="contained" size="lg"  onClick={() =>{setModalCreacionCorrecta(true)}}>Crear Usuario</Button>
            </div>
        </div>


        <ModalComponent abrir={modalCreacionCorrecta}>
            <div>
            <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center"> 
                <Grid item>
                    <Typography variant="h3" gutterBottom component="div">
                            <b>!Felicidades¡</b>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body" gutterBottom component="div">
                            <b>Ya sos parte de la familia donARG</b>
                    </Typography>
                </Grid>
                <Grid item>
                    <Button fullWidth variant="contained" size="lg"  onClick={() =>{navigate('/')}}>Hora de loguearse</Button>
                </Grid>
            </Grid>
            </div>
        </ModalComponent>
    </>

  )
}

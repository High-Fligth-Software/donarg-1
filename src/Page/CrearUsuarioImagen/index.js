import React ,{useState} from 'react'
import { Grid, Typography, Button, TextField, FilledInput  } from '@mui/material';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import { useNavigate  } from 'react-router-dom'
import { ModalComponent } from '../../Components/Modal';
import donarg from '../../imagenes/donARG.PNG'

export const CrearUsuarioImagen = () => {
    const navigate = useNavigate();
    const [modalCreacionCorrecta, setModalCreacionCorrecta] = useState(false)
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
                    <FilledInput type="file"></FilledInput>
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

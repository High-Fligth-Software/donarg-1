import React ,{useState} from 'react'
import { Grid, Typography, Button } from '@mui/material';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import { useNavigate  } from 'react-router-dom'
import { ModalComponent } from '../../Components/Modal';
export const CrearUsuarioImagen = () => {
    const navigate = useNavigate();
    const [modalCreacionCorrecta, setModalCreacionCorrecta] = useState(false)
  return (
    <div class="LoginForm">
        <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center"> 
            <Grid item xs={12} md={12} lg={12}>
                <Typography variant="h5" gutterBottom component="div">
                    <b>¿ Desea agregar una foto de perfil ?</b>
                </Typography>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
                <FaceRetouchingNaturalIcon color="primary" sx={{ fontSize: 300 }} onClick={() =>{console.log("hola")}} style={{cursor: "pointer"}}/>
            </Grid>
        </Grid>
        <div style={{marginTop:"4%"}}>
            <Button fullWidth variant="contained" size="lg"  onClick={() =>{setModalCreacionCorrecta(true)}}>Crear Usuario</Button>
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
    </div>
  )
}

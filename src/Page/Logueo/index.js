import {Grid, FormControl,InputLabel,OutlinedInput, InputAdornment, Link, Button} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import './Logueo.css'
import { useNavigate  } from 'react-router-dom'
import nexo from '../../imagenes/Nexo.png'
import donarg from '../../imagenes/donARG.PNG'
export const Logueo = ()=>{
    const navigate = useNavigate();



    return(
        <div class="divMayor">
            <div class="LoginForm">
                <div class="divLogo">
                    <img src={donarg} alt="hola" width="300px" height="70px"/>
                </div>
                    <Grid container spacing={2}   justifyContent="center" alignItems="center" direction="column">
                        <Grid item xs={12} md={12} lg={12}>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <InputLabel htmlFor="usuario">Usuario</InputLabel>
                                <OutlinedInput
                                    id="usuario"
                                   /*  value={values.amount}
                                    onChange={handleChange('amount')} */
                                    startAdornment={<InputAdornment position="end"><AccountCircleIcon fontSize="small"/></InputAdornment>}
                                    label="Amount"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                    <InputLabel htmlFor="contraseña">Clave</InputLabel>
                                    <OutlinedInput
                                        id="contraseña"
                                        type='password'
                                        /* value={values.amount}
                                        onChange={handleChange('amount')} */
                                        startAdornment={<InputAdornment position="end"><LockIcon fontSize="small" edge="end"/></InputAdornment>}
                                        label="Amount"
                                    />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <div style={{textAlign:"center", cursor:"pointer"}}>
                        <Link underline="none" onClick={()=>{navigate("/crearUsuario")}} >
                            ¿No tienes una cuenta? Presiona AQUI ! 
                        </Link>
                    </div>
                    <div style={{marginTop:"20px", textAlign:"center"}}>
                        <Button variant="contained" size="large" fullWidth>Ingresar</Button>
                    </div>

            </div>
            <div class='divImage'>
                <img src={nexo} alt="hola" width="400px" height="100px"/>
            </div>
        </div>

    )
}

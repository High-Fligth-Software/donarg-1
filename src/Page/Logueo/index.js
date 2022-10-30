import React, {useState, useContext} from 'react'
import {Grid, FormControl,InputLabel,OutlinedInput, InputAdornment, Link, Button} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import './Logueo.css'
import { useNavigate  } from 'react-router-dom'
import {logueo} from '../../Services/LogueoDeUsuario/LoguearUsuario.js'
import LoadingTotalPage from '../../Components/LoadingTotalPage';
import donarg from '../../imagenes/donARG.PNG'
import { ContextUser } from '../../Context/ContextUser';
export const Logueo = ()=>{
    const navigate = useNavigate();
    const [datosDeLogueo, setDatosDeLogueo] = useState({
        "email":"",
        "password": ""
    })
    const [loading, setLoading] = useState(false)
    const userData = useContext(ContextUser)
    const loguearse = async ()=>{
        setLoading(true)
      await logueo(datosDeLogueo).then((response)=>{
            sessionStorage.setItem('token', response.accessToken);
            userData.setUserData(response.user)
            navigate('/Inicio')
            setLoading(false)
        }).catch((error)=>{
            console.log(error)
            setLoading(false)
        })
    }
    if(loading){
        return(
            <LoadingTotalPage/>
        )
    }

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
                                    value={datosDeLogueo.email}
                                    onChange={(e)=>setDatosDeLogueo({...datosDeLogueo, email:e.target.value})}
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
                                        value={datosDeLogueo.password}
                                        onChange={(e)=>setDatosDeLogueo({...datosDeLogueo, password:e.target.value})}
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
                        <Button variant="contained" size="large" fullWidth onClick={() =>{loguearse()}}>Ingresar</Button>
                    </div>
            </div>
        </div>
    )
}

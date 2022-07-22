import React, {useState} from 'react'
import './crearUsuario.css'
import { useNavigate  } from 'react-router-dom'
import { FormPersonaFisica } from '../../Components/crearPersonaFisica/FormPersonaFisica';
import { FormPersonaJuridica } from '../../Components/crearPersonaJuridica/FormPersonaJuridica';
import {Box, Typography ,Grid,InputLabel,OutlinedInput, InputAdornment, Link, Button} from '@mui/material';

export const CrearUsuario = () => {
const navigate = useNavigate();
const [personaTipo, setPersonaTipo] = useState(false);
  return (
    <div class="LoginForm">
        <Typography variant="h5" gutterBottom component="div" style={{textAlign: 'center'}}>
            <b>Es hora de unirse al cambio</b>
        </Typography>
        <div style={{display: 'flex', justifyContent: 'space-around', marginTop:'4%'}}>            

                <Button variant="outlined" onClick={()=>{setPersonaTipo(false)}}>Persona Fisica</Button>

                <Button variant="outlined" onClick={()=>{setPersonaTipo(true)}}>Persona Juridica</Button>
        </div>
        <div>
            {personaTipo ? <FormPersonaJuridica/>:<FormPersonaFisica/>}
        </div>
    </div>
  )
}

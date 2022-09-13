import React, {useState} from 'react'
import './crearUsuario.css'
import { FormPersonaFisica } from '../../Components/crearPersonaFisica/FormPersonaFisica';
import { FormPersonaJuridica } from '../../Components/crearPersonaJuridica/FormPersonaJuridica';
import { Button} from '@mui/material';
import donarg from '../../imagenes/donARG.PNG'

export const CrearUsuario = () => {
const [personaTipo, setPersonaTipo] = useState(false);
  return (
    <>
      <div class="LoginForm">
        <div class="divLogo">
          <img src={donarg} alt="hola" width="300px" height="70px"/>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around', marginTop:'4%'}}>            
                {personaTipo ? <Button variant="outlined" onClick={()=>{setPersonaTipo(false)}}>Persona Fisica</Button>: <Button variant="contained" onClick={()=>{setPersonaTipo(false)}}>Persona Fisica</Button>}
                {personaTipo ? <Button variant="contained" onClick={()=>{setPersonaTipo(true)}}>Persona Juridica</Button>: <Button variant="outlined" onClick={()=>{setPersonaTipo(true)}}>Persona Juridica</Button>}                
        </div>
        <div>
            {personaTipo ? <FormPersonaJuridica/>:<FormPersonaFisica/>}
        </div>
      </div>
    </>

  )
}

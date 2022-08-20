import React from 'react'
import { Grid,TextField, Typography, Button } from '@mui/material';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { useNavigate  } from 'react-router-dom'

export const FormPersonaJuridica = () => {
  const navigate = useNavigate();
  return (
    <div style={{marginTop:"4%"}}>
        <Grid container spacing={2} direction="column">
          <Grid item xs={12} md={12} lg={12}>
              <Typography variant="h7" gutterBottom component="div">
                Aviso: todo lo que se agrega, será visto por otros usuarios en tu perfil. 
              </Typography>        
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
              <Typography variant="h7" gutterBottom component="div">
                <b>Información sobre tú organización</b>
              </Typography>        
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <TextField id="razonSocial" label="Razón social" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <TextField id="email" label="Email de la organización" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <TextField id="telefono" label="Teléfono de la organización" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <TextField
              id="date"
              label="Fecha de fundación"
              type="date"
              defaultValue="2017-05-24"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h7" gutterBottom component="div">
              <b>Haz una pequeña descripción de tú organización</b>
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <TextField
            id="descripcionOrganizacion"
            label="Describe tu organización"
            multiline
            maxRows={15}
            fullWidth
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h7" gutterBottom component="div">
              <b>Dirección tú organización</b>
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <TextField id="calle" label="Calle" variant="outlined" fullWidth />
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <Grid container spacing={1} direction="row">
                <Grid item xs={4} md={4} lg={4}>
                  <TextField id="numero" label="Número" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                  <TextField id="piso" label="Piso" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                  <TextField id="departamento" label="Departamento" variant="outlined" fullWidth />
                </Grid>
            </Grid>
          </Grid>

        </Grid>
        <div style={{marginTop:"4%"}}>
          <Button fullWidth variant="contained" size="lg" onClick={() =>{navigate('/crearUsuarioImagen')}}>LISTO <SendOutlinedIcon/></Button>
        </div>
    </div>
  )
}

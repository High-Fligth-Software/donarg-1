import React, {useState} from 'react'
import {Drawer} from '@mui/material';

export const SideDrawerConfiguraciones = () => {
    const [openSideDrawerConfiguracion, setOpenSideDrawerConfiguracion] = useState(false)
  return (
    <div>
            <Drawer
            anchor={'right'}
            open={openSideDrawerConfiguracion}
            onClose={setOpenSideDrawerConfiguracion(false)}
            >
                <h1>Hola</h1>
            </Drawer>
    </div>
  )
}
export default SideDrawerConfiguraciones;
import React from 'react'
import {Drawer} from '@mui/material';

export const SideDrawerConfiguraciones = (props) => {
  return (
    <div>
        <React.Fragment key={'right'} >
          <Drawer
            anchor={'right'}
            open={props.abrir}
            onClose={props.cerrar}
            style={{minWidth: "490px"}}
          >
            <h1>hola</h1>
          </Drawer>
        </React.Fragment>
    </div>
  )
}

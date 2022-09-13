import * as React from "react";
import {Grid, Box} from '@mui/material';

export function NavBar() {
  return (
    <Grid container>
      <Grid item xs={12} md={12} lg={12}>
        <Box
        sx={{
          width: 300,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
      </Grid>
    </Grid>
  );
}
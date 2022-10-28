import axios from 'axios'
import { backBasePath } from '../../index.js'

export const logueo = async (datosDeLogueo)=>{
    await axios.post(backBasePath + '/auth/login',
    {datosDeLogueo}
    )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
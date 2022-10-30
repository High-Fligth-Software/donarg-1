import axios from 'axios'
import { backBasePath } from '../../index.js'

export const logueo = async (datosDeLogueo)=>{
  const response = await axios.post(backBasePath + '/auth/login',
    {"email": datosDeLogueo.email, "password":datosDeLogueo.password}
    )
      .then(function (response) {
        return response.data.data
      })
      .catch(function (error) {
        return error
      });
    return response;
}
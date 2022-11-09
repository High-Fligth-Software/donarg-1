import axios from "axios";
import { backBasePath } from "../../index.js";

export const eliminarPublicacion = async(id)=>{
    const response = await axios.post(backBasePath + '/post/'+id
    )
      .then(function (response) {
        return response.data.data
      })
      .catch(function (error) {
        return error
      });
    return response;
}
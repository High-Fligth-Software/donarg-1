import axios from "axios";
import { backBasePath } from "../../index.js";

export const GetPost = async ()=>{
   const response = await axios.get(backBasePath + '/post')
   .then(function (response) {
    return response.data
    })
   .catch(function (error) {
    return error
  })
  return response;
}

export const GetPostId = async (id)=>{
  const response = await axios.get(backBasePath + '/post/'+id)
  .then(function (response) {
   return response.data
   })
  .catch(function (error) {
   return error
 })
 return response;
}
import axios from "axios";
import { backBasePath } from "../../index.js";

export const CrearPost = async (datosCreacion, files, setFile) => {
  let formData = new FormData();

  for (let index = 0; index < files.length; index++) {
    formData.append("files", files[index]);
  }
  for (let index = 0; index < datosCreacion.LinesPostDto.length; index++) {
    //console.log(datosCreacion.LinesPostDto[index])
    formData.append(
      "LinesPostDto[]",
      JSON.stringify(datosCreacion.LinesPostDto[index])
    );
  }

  formData.append("title", datosCreacion.title);
  formData.append("content", datosCreacion.content);
  formData.append("typeNumber", datosCreacion.type);
  formData.append("categoryNumber", datosCreacion.category);

  const body = formData;
  let token = sessionStorage.getItem("token");
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  axios
    .post(backBasePath + "/post/newpostwithimages", body)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error);
    });

  setFile(null);
};

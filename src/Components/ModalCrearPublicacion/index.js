import React, { useState, useEffect } from "react";
import { ModalComponent } from "../Modal";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import "./modalCrearPublicacion.css";
import CloseIcon from "@mui/icons-material/Close";
import {
  Grid,
  Divider,
  TextField,
  Typography,
  Button,
  FormControlLabel,
  FormControl,
  Select,
  MenuItem,
  Checkbox,
  Alert
} from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { CrearPost } from "../../Services/Publicacion/CrearPublicacion";
export const ModalCrearPublicacion = (props) => {
  const [itemsDonacion, setItemsDonacion] = useState([]);
  const [objeto, setObjeto] = useState("");
  const [categoria, setCategoria] = useState("Otros");
  const [cantidad, setCantidad] = useState("");
  const [files, setFiles] = useState();
  const [filesToView, setFilesToView] = useState([]);
  const [imageView,setimageView] = useState("");
  const [chekcMovilidadSi, setCheckMovilidadSi] = useState(false);
  const [chekcMovilidadNo, setCheckMovilidadNo] = useState(true);
  const [chekcDonacion, setCheckDonacion] = useState(false);
  const [chekcPeticion, setCheckPeticion] = useState(true);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [errorLog, setErrorLog] = useState("")


const selectedHandler = (e) => {
    let files = e.target.files;
    setFiles(files);
    let filesView = [];
    for (let index = 0; index < 5; index++) {
      if (e.target.files[index] !== undefined)
        filesView.push(URL.createObjectURL(e.target.files[index]));
    }
    setFilesToView(filesView);
    setimageView(filesView[0])
  };
  const agregarItems = () => {
    setItemsDonacion((current) => [
      ...current,
      { description: objeto, cantidad: cantidad, categoria: categoria },
    ]);
  };
  useEffect(() => {

  }, []);
  const itemsCategorias = [
    "Alimentos no perecederos",
    "Ropa",
    "Libreria",
    "Otros",
  ];
  const checkMovilidad = (bandera) => {
    if (bandera === 0) {
      setCheckMovilidadNo(true);
      setCheckMovilidadSi(false);
    } else {
      setCheckMovilidadNo(false);
      setCheckMovilidadSi(true);
    }
  };
  const checkTipoPublicacion = (bandera) => {
    if (bandera === 0) {
      setCheckPeticion(true);
      setCheckDonacion(false);
    } else {
      setCheckPeticion(false);
      setCheckDonacion(true);
    }
  };

  const crearPublicacion = () => {
    if(itemsDonacion.length===0){
      setErrorLog("No es posible generar una publicación sin items")
    }else{
      const datosPublicacion = {
        LinesPostDto: itemsDonacion,
        title: titulo,
        content: descripcion,
        type: chekcPeticion ? 1 : 2,
        category: 1,
      };
      CrearPost(datosPublicacion, files, setFiles);
      props.closeModal(false);
    }
  };
  return (
    <ModalComponent abrir={props.abrirModal} width={1500} height={"auto"}>
      <>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          sx={{ width: 1600, height: 600 }}
        >
          <Grid item xs={12} md={3} lg={3} style={{display: "flex",alignItems: "center",margin: "0 0 0 7%",}}>
            <div className="container-input">
              <input
                className="inputfile"
                onChange={selectedHandler}
                multiple
                type={"file"}
              ></input>
              {
                filesToView.length===0 ? 
                    <AddAPhotoIcon
                    sx={{ width: 200, height: 200, cursor: "pointer" }}
                  />:
                  <div>
                    <img class="img-view" alt="Imagen del producto grande" src={imageView} />
                  </div>
              }
              <div className="images_container">
                {filesToView.map((f) => {
                  return <img class="img-preview" alt="Imagen del producto" src={f} onClick={()=>{setimageView(f)}}/>;
                })}
              </div>
            </div>
          </Grid>
          <Divider orientation="vertical" flexItem fullheight></Divider>
          <Grid item xs={7} md={7} lg={7}>
            <Grid
              container
              direction="column"
              sx={{ marginLeft: "3%" }}
              spacing={1}
            >
              <Grid item xs={12} md={12} lg={12}>
                <Typography variant="h5" gutterBottom component="div">
                  <b>Información de tú publicación</b>
                </Typography>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <TextField
                  id="titulo"
                  label="Título"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => {
                    setTitulo(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <TextField
                  id="descripcionPublicacion"
                  label="Describe tu publicación"
                  multiline
                  maxRows={3}
                  fullWidth
                  onChange={(e) => {
                    setDescripcion(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Grid container direction="row">
                  <Grid item xs={6} md={6} lg={6}>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography variant="h7" gutterBottom component="div">
                          <b>Movilidad</b>
                        </Typography>
                      </Grid>
                      <Grid item>
                        <FormControlLabel
                          control={<Checkbox checked={chekcMovilidadNo} />}
                          label="No"
                          onClick={() => {
                            checkMovilidad(0);
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <FormControlLabel
                          control={<Checkbox checked={chekcMovilidadSi} />}
                          label="Si"
                          onClick={() => {
                            checkMovilidad(1);
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} md={6} lg={6}>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography variant="h7" gutterBottom component="div">
                          <b>Tipo de publicacion</b>
                        </Typography>
                      </Grid>
                      <Grid item>
                        <FormControlLabel
                          control={<Checkbox checked={chekcPeticion} />}
                          label="Peticion"
                          onClick={() => {
                            checkTipoPublicacion(0);
                          }}
                        />
                      </Grid>
                      <Grid item style={{ marginBottom: "4%" }}>
                        <FormControlLabel
                          control={<Checkbox checked={chekcDonacion} />}
                          label="Donacion"
                          onClick={() => {
                            checkTipoPublicacion(1);
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Typography variant="h5" gutterBottom component="div">
                  <b>Especificar items</b>
                </Typography>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Grid container direction="row" spacing={1}>
                  <Grid item xs={4} md={4} lg={4}>
                    <TextField
                      id="objeto"
                      label="Objeto"
                      variant="outlined"
                      fullWidth
                      onChange={(e) => {
                        setObjeto(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={4} md={4} lg={4}>
                    <FormControl>
                      <Select
                        sx={{ width: "300px" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={categoria}
                        onChange={(e) => {
                          setCategoria(e.target.value);
                        }}
                      >
                        {itemsCategorias.map((item) => {
                          return <MenuItem value={item}>{item}</MenuItem>;
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={2} md={2} lg={2}>
                    <TextField
                      id="cantidad"
                      label="Cantidad"
                      variant="outlined"
                      fullWidth
                      onChange={(e) => {
                        setCantidad(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    md={2}
                    lg={2}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Button
                      fullWidth
                      variant="contained"
                      size="lg"
                      onClick={() => {
                        agregarItems();
                      }}
                    >
                      Agregar
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item  xs={12} md={12} lg={12}>
                  {itemsDonacion ?
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start" spacing={1}>
                      {
                        itemsDonacion.map((element)=>{
                          return(
                            <>
                              <Grid item xs={4} md={4} lg={4}>
                               <Typography variant="subtitle2" gutterBottom> {element.description} - {element.categoria} - {element.cantidad} </Typography>
                              </Grid>
                              <Grid item xs={1} md={1} lg={1}>
                                <DeleteOutlineOutlinedIcon sx={{cursor: "pointer", color:"#CB3234"}}/>
                              </Grid>
                            </>
                          )
                        })
                      }
                    </Grid>
                  :null}
              </Grid>
              <Grid item  xs={12} md={12} lg={12} sx={{marginTop:"1%"}}>
                  <Button
                      variant="contained"
                      size="sm"
                      fullWidth
                      onClick={() => {
                        crearPublicacion();
                      }}
                    >
                      Crear Publicación
                  </Button>
              </Grid>
              <Grid item  xs={12} md={12} lg={12}>
                  {errorLog ? <Alert severity="error" sx={{borderRadius:"10px", marginTop:"1%"}}>{errorLog}</Alert>:null}
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={1}
            md={1}
            lg={1}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Grid container direction="column" justifyContent="space-between">
              <Grid item>
                <CloseIcon
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    props.closeModal(false);
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    </ModalComponent>
  );
};

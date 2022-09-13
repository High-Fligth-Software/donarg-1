import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Logueo } from './Page/Logueo';
import { CrearUsuario } from './Page/CrearUsuario';
import { CrearUsuarioImagen } from './Page/CrearUsuarioImagen';
import {Inicio} from './Page/Inicio';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
//document.body.style.backgroundColor = "#1976d2";
document.body.style.backgroundColor = "#eef3f8";
//document.body.style.backgroundImage = "url(https://static.vecteezy.com/system/resources/previews/004/449/825/original/donation-center-visit-2d-isolated-illustration-non-profit-foundation-help-happy-volunteers-flat-characters-on-cartoon-background-contributing-to-social-service-organizations-colourful-scene-vector.jpg)"
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Logueo />} />
      <Route path="Inicio" element={<Inicio/>} />
      <Route path="crearUsuario" element={<CrearUsuario />} />
      <Route path="crearUsuarioImagen" element={<CrearUsuarioImagen/>} />
    </Routes>
</BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

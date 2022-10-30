import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Logueo } from './Page/Logueo';
import { CrearUsuario } from './Page/CrearUsuario';
import { CrearUsuarioImagen } from './Page/CrearUsuarioImagen';
import {Inicio} from './Page/Inicio';
import { MisPublicaciones } from './Page/MisPublicaciones';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ContextCreateUser from './Context/ContextCreateUser';
import ContextUser from './Context/ContextUser';
const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.style.backgroundColor = "#eef3f8";
export const backBasePath = 'http://localhost:3000'
root.render(
  <BrowserRouter>
   <ContextCreateUser>
   <ContextUser>
      <Routes>
        <Route path="/" element={<Logueo />} />
        <Route path="Inicio" element={<Inicio/>} />
        <Route path="crearUsuario" element={<CrearUsuario />} />
        <Route path="crearUsuarioImagen" element={<CrearUsuarioImagen/>} />
        <Route path="MisPublicaciones" element={<MisPublicaciones/>} />
      </Routes>
    </ContextUser>
    </ContextCreateUser>
</BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Logueo } from './Page/Logueo';
import { CrearUsuario } from './Page/CrearUsuario';
import { CrearUsuarioImagen } from './Page/CrearUsuarioImagen';
import {Inicio} from './Page/Inicio';
import { MisPublicaciones } from './Page/MisPublicaciones';
import { DonarADonarg } from './Page/DonarADonarg';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ContextCreateUser from './Context/ContextCreateUser';
import ContextUser from './Context/ContextUser';
import ContextFilter from './Context/ContextFilter';
const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.style.backgroundColor = "#eef3f8";
export const backBasePath = 'https://cf76-2803-9800-9444-8b28-2d66-5259-5923-ec12.ngrok.io'
root.render(
  <BrowserRouter>
    <ContextCreateUser>
    <ContextUser>
    <ContextFilter>
        <Routes>
          <Route path="/" element={<Logueo />} />
          <Route path="Inicio" element={<Inicio/>} />
          <Route path="crearUsuario" element={<CrearUsuario />} />
          <Route path="crearUsuarioImagen" element={<CrearUsuarioImagen/>} />
          <Route path="MisPublicaciones" element={<MisPublicaciones/>} />
          <Route path="donarg" element={<DonarADonarg/>} />
        </Routes>
    </ContextFilter>
    </ContextUser>
    </ContextCreateUser>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

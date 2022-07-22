import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Logueo } from './Page/Logueo';
import { CrearUsuario } from './Page/CrearUsuario';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.style.backgroundColor = "#179fcd";
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Logueo />} />
      <Route path="crearUsuario" element={<CrearUsuario />} />
    </Routes>
</BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

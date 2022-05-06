import React from "react";
import { Route, Routes } from "react-router-dom";
import Saludar from "./components/Saludar/Saludar";
import Buscador from "./components/Buscador/Buscador";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import BotonBuscarSvg from './components/BotonBuscarSvg/BotonBuscarSvg';
import BotonFavoritosSvg from './components/BotonFavoritosSvg/BotonFavoritosSvg';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path = "/" element = { <Saludar /> } />
        <Route path = "/home" element = { <Home /> } />
        <Route path = "/buscar" element = { <BotonBuscarSvg /> } />
        <Route path = "/favoritos" element = { <BotonFavoritosSvg /> } />
      </Routes>
    </>
  )
}

export default App;
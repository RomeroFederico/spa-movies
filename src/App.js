import React from "react";
import { Route, Routes } from "react-router-dom";
import Saludar from "./components/Saludar/Saludar";
import Buscador from "./components/Buscador/Buscador";
import Home from "./components/Home/Home";
import About from './components/About/About';

function App() {
  return (
    <>
      <Buscador />
      <Routes>
        <Route exact path = "/" element = { <Saludar /> } />
        <Route path = "/home" element = { <Home /> } />
        <Route path = "/about" element = { <About /> } />
      </Routes>
    </>
  )
}

export default App;
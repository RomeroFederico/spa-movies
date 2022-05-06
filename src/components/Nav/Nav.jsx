import React from "react";
import { Link } from "react-router-dom";
import BotonBuscarSvg from '../BotonBuscarSvg/BotonBuscarSvg';
import BotonFavoritosSvg from '../BotonFavoritosSvg/BotonFavoritosSvg';

export default function Nav() {
  return (
    <>
      <Link to = "/favoritos" >FAVORITOS</Link>
      <Link to = "/buscar" >BUSCAR</Link>
    </>
  )
}
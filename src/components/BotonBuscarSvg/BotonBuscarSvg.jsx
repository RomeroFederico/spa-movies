import React from 'react'
import { ReactComponent as SvgBuscar } from '../SvgBuscar/SvgBuscar.svg';
import '../SvgBuscar/animation-search.css';
import s from './BotonBuscarSvg.module.css';

export default function BotonBuscarSvg() {

  let [ animated, setAnimated ] = React.useState(false);

  let handleHover = function(){
    setAnimated(!animated);
  }

  return (
    <div className = {`${s.hoverwrap} ${s.effect}`} onMouseEnter = {handleHover} onMouseLeave = {handleHover} >
      <SvgBuscar className = { animated ? "animated" : "" }/>
      <div className = {s.hovercap} >
        <h3 className  = {s.titlePeliculas}>Buscar Peliculas</h3>
        <div className  = {s.line}></div>
        <div className  = {s.subtitle}>Busca tus peliculas en nuestro catalogo para visualizarla o guardarla en tus favoritos</div>
      </div>
    </div>
  )
};
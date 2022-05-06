import React from 'react'
import { ReactComponent as SvgFavoritos } from '../SvgFavoritos/SvgFavoritos.svg';
import '../SvgFavoritos/animation-favorites.css';
import s from './BotonFavoritosSvg.module.css';

export default function BotonFavoritosSvg() {

  return (
    <div className = {`${s.hoverwrap} ${s.effect}`}>
      <SvgFavoritos />
      <div className = {s.hovercap} >
        <h3 className  = {s.titlePeliculas}>Ver Favoritos</h3>
        <div className  = {s.line}></div>
        <div className  = {s.subtitle}>Administra tu lista de favoritos</div> 
      </div>
    </div>
  )
};
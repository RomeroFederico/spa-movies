import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import BotonBuscarSvg from '../BotonBuscarSvg/BotonBuscarSvg';
import BotonFavoritosSvg from '../BotonFavoritosSvg/BotonFavoritosSvg';
import { changeTheme } from '../../redux/actions/index.js';
import s from './Nav.module.css';

export default function Nav() {

  let dispatch = useDispatch();

  let handleClick = function() {
    dispatch(changeTheme());
  }

  return (
    <>
      <div className = {s.divNav}>
        <div onClick = {handleClick} className = {s.btn}>Cambiar Tema</div>
        <Link to = "/favoritos" style= { {textDecoration: 'none'}} >
          <div className = {s.btn}>
            FAVORITOS
            <div className = {s.line}></div>
          </div>
        </Link>
        <Link to = "/buscar" style= { {textDecoration: 'none'}} >
          <div className = {s.btn}>
            BUSCAR
            <div className = {s.line}></div>
          </div>
        </Link>
      </div>
    </>
  )
}
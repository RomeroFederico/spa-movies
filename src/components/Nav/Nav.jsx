import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import BotonBuscarSvg from '../BotonBuscarSvg/BotonBuscarSvg';
import BotonFavoritosSvg from '../BotonFavoritosSvg/BotonFavoritosSvg';
import { changeTheme } from '../../redux/actions/index.js';
import s from './Nav.module.css';
import { ReactComponent as SvgSun } from '../SvgSun/SvgSun.svg';
import { ReactComponent as SvgMoon } from '../SvgMoon/SvgMoon.svg';

export default function Nav() {

  let theme = useSelector((state) => state.theme);

  let dispatch = useDispatch();

  let handleClick = function() {
    dispatch(changeTheme());
  }

  return (
    <>
      <div className = {s.divNav}>
        {/*<div onClick = {handleClick} className = {s.btn}>Cambiar Tema</div>*/}
        <div className = {s.btnTheme} onClick = {handleClick} >
          { theme === 'darkTheme' && <SvgSun className = {s.sun} /> }
          { theme === 'lightTheme' && <SvgMoon className = {s.moon} /> }
        </div>
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
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSaludoCB } from '../../redux/actions/index.js';

export default function Saludar() {

  let stateSaludar = useSelector((state) => state.saludar);
  let dispatch = useDispatch();

  let handleClick = function(){
    dispatch(getSaludoCB());
  }

  if (stateSaludar) return <span>Hola</span>

  return (
    <>
      <button onClick = {handleClick}>Clickeame para saludar</button>
      <span>No hay saludo :(</span>
    </>
  )
};
import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getSaludoCB } from '../../redux/actions/index.js';
import s from './Fav.module.css';

export default function Fav() {

  let [ like, setLike] = React.useState(false);

  // let stateSaludar = useSelector((state) => state.saludar);
  // let dispatch = useDispatch();

  // let handleClick = function(){
  //   dispatch(getSaludoCB());
  // }

  let handleClick = function() {
    setLike(!like);
  }

  if (!like) return <label className = {s.heartEmpty} onClick = {handleClick}>❤</label>;

  return (
    <div className = {s.bubble}>
      <label className = {s.heart} onClick = {handleClick}>❤</label>
    </div> 
  )
};
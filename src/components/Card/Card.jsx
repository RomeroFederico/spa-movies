import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getSaludoCB } from '../../redux/actions/index.js';
import s from './Card.module.css';
import poster from '../../img/poster-not-found.svg';

export default function Card({ title, img, year, type }) {

  // let stateSaludar = useSelector((state) => state.saludar);
  // let dispatch = useDispatch();

  // let handleClick = function(){
  //   dispatch(getSaludoCB());
  // }

  let [ error, setError ] = React.useState(false);

  let handleErrorImage = function(){
    setError(true);
  }

  return (
    <div className = {s.container}>
      <div className = {s.divCard}>
        <div className = {s.divImg}>
          <div className = {s.wrap}>
          </div>
          { !error && <img src = {img} alt = {title} onError = {handleErrorImage} className = {s.img}/>}
          { error && <img src = {poster} alt = {title} className = {s.img}/> }
          <div className = {s.fav}>
          </div>
        </div>
        <div className = {s.divInfo}>
          <div className = {s.divTitle}>{title.length < 45 ? title : title.slice(0, 45) + '...'}</div>
          <div className = {s.divSubInfo}>
            <span>Type: {type}</span>
            <span>Year: {year}</span>
          </div>
        </div>
      </div>
    </div>
  )
};
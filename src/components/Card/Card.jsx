import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getSaludoCB } from '../../redux/actions/index.js';
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
    <div>
      <div>
        { !error && <img src = {img} alt = {title} onError = {handleErrorImage} />}
        { error && <img src = {poster} alt = {title} /> }
      </div>
      <div>
        <span>{title}</span>
        <div>
          <span>{type}</span>
          <span>{year}</span>
        </div>
      </div>
    </div>
  )
};
import React from 'react'
import { useSelector } from 'react-redux';
import Indice from '../Indice/Indice';

export default function Home() {

	const { result } = useSelector((state) => state.movies)

	if (!result) return <span>Cargando elementos.</span>

  return (
    <>
      {
      	result.map((m, i) => { return (
      		<div key = {`search-result-${m.imdbID}-${i}`}>
      			<span>{m.Title}</span>
      		</div>
      	)})
      }
      <Indice />
    </>
  )
};
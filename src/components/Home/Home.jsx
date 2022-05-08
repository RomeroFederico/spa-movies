import React from 'react'
import { useSelector } from 'react-redux';
import Indice from '../Indice/Indice';
import Card from '../Card/Card';

export default function Home() {

	const { result } = useSelector((state) => state.movies)

	if (!result) return <span>Cargando elementos.</span>

  return (
    <>
      {
      	result.map((m, i) => { return (
      		<Card 
            key = {`search-result-${m.imdbID}-${i}`}
            title = {m.Title}
            img = {m.Poster}
            year = {m.Year}
            type = {m.Type}
          />
      	)})
      }
      <Indice />
    </>
  )
};
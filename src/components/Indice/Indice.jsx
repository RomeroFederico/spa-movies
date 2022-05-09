import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../../redux/actions/index.js';

export default function Buscador() {

	const dispatch = useDispatch();
	const { pages, current, search } = useSelector((state) => state.movies);

	let handleClick = function(page) {
		dispatch(getMovies(search, page + 1));
	}

  return (
  	<div>
	    {
	    	pages && Array(pages).fill(0).map((_, i) => { return (
	    		<button 
	    			key = {`page-${i + 1}`}
	    			disabled = { current === i + 1 }
	    			onClick = { () => handleClick(i) }
	    			>
	    			{i + 1}
	    		</button>
	    	)})
	    }
    </div>
  )
};
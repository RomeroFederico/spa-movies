import React from 'react'
import { useDispatch } from 'react-redux';
import { getMovies } from '../../redux/actions/index.js';

export default function Buscador() {

	const dispatch = useDispatch();
	const [ input, setInput ] = React.useState("");

	let handleChange = function(e) {
		let { value } = e.target;

		setInput(value);

		if (value.length > 0)
			dispatch(getMovies(value));
	}

  return (
    <input type = "text" onChange = {handleChange} value = {input} />
  )
};
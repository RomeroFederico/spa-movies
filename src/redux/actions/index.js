export const SALUDAR  = "SALUDAR";
export const SALUDAR_CON_CB  = "SALUDAR";
export const GET_MOVIES  = "GET_MOVIES";
export const CHANGE_THEME  = "CHANGE_THEME";

const API_KEY = "38115414";

export const getSaludoCB = () => {
  return async function (dispatch) {
    return delay(1000)
           .then((json) => {
              dispatch({
                type: SALUDAR
              })
           })
  };
};

const delay = (t) => {
	return new Promise((resolve) => setTimeout(resolve, t));
}

export function saludar() {
	return {
		type: SALUDAR
	}
}

export function getMovies(title, page = 1) {
	return function (dispatch) {
		return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}${page !== 1 ? `&page=${page}` : ''}`)
					 .then((response) => response.json())
					 .then((result) => {
					 	console.log(result);
					 	if (result.Response === 'True')
					 		dispatch({
						 		type: GET_MOVIES,
						 		payload: {
						 			result: result.Search,
						 			total: result.totalResults,
						 			current: page,
						 			search: title
						 		}
					 		})
					 	else console.log("No se encontraron las peliculas");
					 })
					 .catch((error) => console.log(error));
	}
}

export function changeTheme() {
	return {
		type: CHANGE_THEME
	}
}
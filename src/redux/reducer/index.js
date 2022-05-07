import { SALUDAR, GET_MOVIES, CHANGE_THEME } from '../actions/index.js';

const initialState = {
  saludar: false,
  movies: {},
  theme: "darkTheme"
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SALUDAR:
      return {
        ...state,
        saludar: true
      }
    case GET_MOVIES:
      return {
        ...state,
        movies: {
          ...action.payload,
          pages: Math.ceil(Number(action.payload.total) / 10)
        }
      }
    case CHANGE_THEME:
      return {
        ...state,
        theme: state.theme === "darkTheme" ? "lightTheme" : "darkTheme"
      }
    default:
      return state;
  }
};

export default rootReducer;
import { SALUDAR, GET_MOVIES } from '../actions/index.js';

const initialState = {
  saludar: false,
  movies: {}
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
    default:
      return state;
  }
};

export default rootReducer;
import { SALUDAR } from '../actions/index.js';

const initialState = {
  saludar: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SALUDAR:
      return {
        ...state,
        saludar: true
      }
    default:
      return state;
  }
};

export default rootReducer;
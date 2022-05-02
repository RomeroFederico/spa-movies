export const SALUDAR  = "SALUDAR";
export const SALUDAR_CON_CB  = "SALUDAR";

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
const reset = 'RESET';


export const clear = () => {
  return {
    type: reset
  }
}

const initialState = [];

export const data = (state = initialState, action) => {
  switch(action.type) {
    case reset:
      return initialState;
    default:
      return state;
  }
}


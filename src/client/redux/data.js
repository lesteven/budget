const add = 'ADD';
const reset = 'RESET';

export const update = (payload) => {
  return {
    type: add,
    payload
  }
}


export const clear = () => {
  return {
    type: reset
  }
}

const initialState = {};

export const data = (state = initialState, action) => {
  switch(action.type) {
    case add:
      return action.payload;
    case reset:
      return initialState;
    default:
      return state;
  }
}


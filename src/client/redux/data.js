const add = 'ADD';
const insert = 'INSERT';
const reset = 'RESET';

export const update = (payload) => {
  return {
    type: add,
    payload
  }
}

export const insertData = (payload) => {
  return {
    type: insert,
    payload
  }
}

export const clear = () => {
  return {
    type: reset
  }
}

const initialState = [];

export const data = (state = initialState, action) => {
  switch(action.type) {
    case insert:
      return action.payload;
    case add:
      return action.payload;
    case reset:
      return initialState;
    default:
      return state;
  }
}


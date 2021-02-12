import { HIDE_ERROR, SET_ERROR } from './errorActions';

const initialState = {
  error: null,
  isOpen: false,
};

const errorReducer = (state = initialState, action = {}) => {
  if (action.type === SET_ERROR) return { error: action.payload, isOpen: true };
  if (action.type === HIDE_ERROR) return { error: null, isOpen: false };
  else return initialState;
};

export default errorReducer;

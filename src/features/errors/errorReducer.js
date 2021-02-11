import { HIDE_ERROR } from './errorActions';

const initialState = {
  error: null,
  isOpen: false,
};

const errorReducer = (state = initialState, action = {}) => {
  const { payload } = action;

  if (payload) return { error: payload, isOpen: true };
  if (action.type === HIDE_ERROR) return { error: null, isOpen: false };
  else return initialState;
};

export default errorReducer;

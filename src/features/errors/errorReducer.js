import { HIDE_ERROR, SET_ERROR } from './errorActions';

const initialState = {
  error: {},
  isOpen: false,
};

const errorReducer = (state = initialState, action = {}) => {
  if (action.type === SET_ERROR)
    return {
      ...state,
      error: { ...action.payload },
      isOpen: true,
    };
  if (action.type === HIDE_ERROR)
    return {
      ...state,
      error: {},
      isOpen: false,
    };
  else return state;
};

export default errorReducer;

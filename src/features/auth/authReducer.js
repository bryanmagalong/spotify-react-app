import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './authActions';

const initialState = {
  isLogged: false,
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogged: false,
      };
    default:
      return state;
  }
};

export default authReducer;

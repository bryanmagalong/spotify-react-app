import { LOGIN_SUCCESS } from '../actions/authActions';

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
    default:
      return state;
  }
};

export default authReducer;

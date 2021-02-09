/* eslint-disable import/no-anonymous-default-export */
import {
  LOGIN,
  loginSuccess,
  LOGOUT,
  logoutSuccess,
} from '../actions/authActions';
import { getParamValues } from '../utils/functions';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN:
      const access_token = getParamValues(action.payload);
      // Convert expiration on ms
      const expiryTime = new Date().getTime() + access_token.expires_in * 1000;

      // console.log(`/====== authMiddleware : ${action.payload} ${expiryTime}`);

      // Store access token and expiration in localStorage
      localStorage.setItem('params', JSON.stringify(access_token));
      localStorage.setItem('expiry_time', expiryTime);

      store.dispatch(loginSuccess());
      break;
    case LOGOUT:
      localStorage.removeItem('params');
      localStorage.removeItem('expiry_time');

      store.dispatch(logoutSuccess());
      break;
    default:
      return next(action);
  }
};

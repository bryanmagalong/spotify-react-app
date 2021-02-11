/* eslint-disable import/no-anonymous-default-export */
import { LOGIN, loginSuccess, LOGOUT, logoutSuccess } from './authActions';
import {
  getParamValues,
  tokenExists,
  setAuthHeader,
  deleteAuthHeader,
} from '../../utils/functions';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN:
      // Check if the user is already logged in
      if (tokenExists()) return store.dispatch(loginSuccess());

      // Check if a not logged user tries to get to /redirect
      if (!action.payload)
        throw new Error('Access denied! Please log in or try later!');

      const access_token = getParamValues(action.payload);
      // Convert expiration on ms
      const expiryTime = new Date().getTime() + access_token.expires_in * 1000;

      // console.log(`/====== authMiddleware : ${action.payload} ${expiryTime}`);

      // Store access token and expiration in localStorage
      localStorage.setItem('params', JSON.stringify(access_token));
      localStorage.setItem('expiry_time', expiryTime);
      setAuthHeader(access_token);

      return store.dispatch(loginSuccess());
    case LOGOUT:
      localStorage.removeItem('params');
      localStorage.removeItem('expiry_time');
      deleteAuthHeader();

      store.dispatch(logoutSuccess());
      break;
    default:
      return next(action);
  }
};

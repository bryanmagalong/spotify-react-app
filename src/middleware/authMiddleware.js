/* eslint-disable import/no-anonymous-default-export */
import { LOGIN, loginSuccess } from '../actions/authActions';
import { getParamValues } from '../utils/functions';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN:
      const access_token = getParamValues(action.payload);
      const expiryTime = new Date().getTime() + access_token.expires_in * 1000;

      // console.log(`/====== authMiddleware : ${action.payload} ${expiryTime}`);

      localStorage.setItem('params', JSON.stringify(access_token));
      localStorage.setItem('expiry_time', expiryTime);

      store.dispatch(loginSuccess());
      break;
    default:
      next(action);
  }
};

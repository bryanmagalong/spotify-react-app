export const SET_ERROR = 'SET_ERROR';
export const HIDE_ERROR = 'HIDE_ERROR';

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const hideError = () => ({
  type: HIDE_ERROR,
});

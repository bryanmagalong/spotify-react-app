import axios from 'axios';

/**
 * Function that will store the acces_token, token_type and expires_in values in an object.
 * @param {String} url
 * @retun Object
 */
export const getParamValues = (url) => {
  return url.slice(1).split('&').reduce((prev, curr) => {
    const [ title, value ] = curr.split('=');
    prev[title] = value;
    return prev;
  }, {});
};

/**
 * Function that will add the access_token to every axios API request
 */
export const setAuthHeader = () => {
  try {
    const params = JSON.parse(localStorage.getItem('params'));
    if (params) {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${params.access_token}`;
    }
  } catch (error) {
    console.log('Error setting auth', error);
  }
};

export const tokenExists = () => {
  const token = localStorage.getItem('params');
  // console.log(token);
  if (token === '{}') return false;
  return token;
};

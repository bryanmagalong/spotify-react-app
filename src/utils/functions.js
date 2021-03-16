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
 * Add the access_token to every axios API request
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

// export const checkExpiration = () => {
//   const expiryTime = JSON.parse(localStorage.getItem('expiry_time'));
//   const currentDate = new Date().getTime() * 1000;
//   return currentDate > expiryTime;
// };

export const tokenExists = () => {
  const token = localStorage.getItem('params');
  const expiryDate = localStorage.getItem('expiry_time');
  const dateNow = new Date().getTime() * 1000;

  if (token === '{}' || dateNow >= expiryDate) return false;
  return token;
};

/**
 * Convert milliseconds to minutes and seconds (minutes:seconds)
 * https://stackoverflow.com/questions/21294302/converting-milliseconds-to-minutes-and-seconds-with-javascript
 * @param {milliseconds} ms 
 */
export const msToMinutesAndSeconds = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);

  // eslint-disable-next-line eqeqeq
  return seconds == 60
    ? minutes + 1 + ':00'
    : minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};

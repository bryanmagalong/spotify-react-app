/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import { getParamValues } from '../utils/functions';

const Redirect = ({ setError, login, isLogged }) => {
  let history = useHistory();

  useEffect(() => {
    try {
      if (isLogged) return history.push('/');
      if (!history.location.hash)
        throw new Error('Access denied! Please try again!');

      login(history.location.hash);
      history.push('/');
    } catch (error) {
      setError(error.message);
      // console.log(error.message);
      history.push('/login');
    }
  }, []);

  return <div>Redirect</div>;
};

export default Redirect;

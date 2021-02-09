/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import { getParamValues } from '../utils/functions';

const Redirect = ({ login, isLogged }) => {
  let history = useHistory();

  useEffect(() => {
    try {
      if (isLogged) return history.push('/');

      login(history.location.hash);
      history.push('/');
    } catch (error) {
      // TODO loginError
      history.push('/login');
    }
  }, []);

  return <div>Redirect</div>;
};

export default Redirect;

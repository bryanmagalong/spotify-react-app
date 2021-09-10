/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { login } from '../../features/auth/authActions';
import { setError } from '../../features/errors/errorActions';

const Redirect = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(login(history.location.hash));
      history.push('/');
    } catch (error) {
      dispatch(
        setError({
          message: error.message,
          status: 401,
        }),
      );

      // redirect to login page if not logged in
      history.push('/login');
    }
  }, []);

  return <div>Redirect</div>;
};

export default Redirect;

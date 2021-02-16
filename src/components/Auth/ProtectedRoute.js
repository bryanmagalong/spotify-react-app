import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { tokenExists } from '../../utils/functions';
import { loginSuccess } from '../../features/auth/authActions';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLogged) return <Component {...props} />;
        if (tokenExists()) {
          dispatch(loginSuccess());
          return <Component {...props} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default ProtectedRoute;

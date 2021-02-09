import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { tokenExists } from '../../utils/functions';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { loginSuccess, isLogged } = { ...rest };
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLogged) return <Component {...props} />;
        if (tokenExists()) {
          loginSuccess();
          return <Component {...props} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default ProtectedRoute;

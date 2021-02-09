import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { loginSuccess } from '../../actions/authActions';
import { tokenExists } from '../../utils/functions';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  // let auth = AuthContext;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (rest.isLogged) return <Component {...props} />;
        if (tokenExists()) {
          loginSuccess();
          return <Component {...props} />;
        }
        console.log(rest);
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default ProtectedRoute;

import React from 'react';
import {Switch, Route} from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyles from '../theme/globalStyles';
import Home from '../containers/Home';
import Login from '../components/Login';
import Redirect from '../containers/Redirect';
import ProtectedRoute from '../containers/ProtectedRoute';
import ErrorPopup from '../containers/ErrorPopup';

const AppStyled = styled.div`
  background: linear-gradient(to bottom, ${props => props.theme.colors.subLight}, ${props => props.theme.colors.main});
  min-height: 100vh;
  position: relative;
`;

const App = ({error, isOpen}) => {
  return (
    <>
      <GlobalStyles />
      <AppStyled>
          <Switch>
            <ProtectedRoute exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/redirect' component={Redirect} />
          </Switch>
          {isOpen && <ErrorPopup>{error}</ErrorPopup>}
      </AppStyled> 
    </>
  );
}

export default App;

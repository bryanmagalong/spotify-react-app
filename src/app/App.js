import React from 'react';
import {useSelector} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyles from '../theme/globalStyles';
import Home from '../components/Home';
import Login from '../components/Login';
import Redirect from '../components/Auth/Redirect';
import ProtectedRoute from '../components/Auth/ProtectedRoute';
import ErrorPopup from '../components/shared/ErrorPopup';
import Navbar from '../components/Navbar';

const AppStyled = styled.div`
  background: linear-gradient(to bottom, ${props => props.theme.colors.subLight}, ${props => props.theme.colors.main});
  min-height: 100vh;
  position: relative;
`;

const App = ({error, isOpen}) => {
  const isLogged = useSelector(state => state.authReducer.isLogged);
  // console.log(isLogged);
  return (
    <>
      <GlobalStyles />
      <AppStyled>
          <Switch>
            <ProtectedRoute exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/redirect' component={Redirect} />
          </Switch>
          {isLogged && <Navbar />}
          {isOpen && <ErrorPopup>{error}</ErrorPopup>}
      </AppStyled> 
    </>
  );
}

export default App;

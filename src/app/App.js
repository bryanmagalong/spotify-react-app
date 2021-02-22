import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyles from '../theme/globalStyles';
import Home from '../components/Home';
import Login from '../components/Login';
import Redirect from '../components/Auth/Redirect';
import ProtectedRoute from '../components/Auth/ProtectedRoute';
import ErrorPopup from '../components/shared/ErrorPopup';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Wrapper from '../components/shared/Wrapper';

const AppStyled = styled.div`
  background: linear-gradient(to bottom, ${props => props.theme.colors.subLight}, ${props => props.theme.colors.main});
  min-height: 100vh;
  display: flex;
`;

const App = () => {
  const isLogged = useSelector(state => state.auth.isLogged);
  const { error, isOpen } = useSelector(state => state.errors);

  return (
    <>
      <GlobalStyles />
      <AppStyled>
          {isLogged && <Navbar />}
          <Wrapper as='main' fullWidth>
          {isLogged && <Search />}
          {isOpen && <ErrorPopup>{error.message}</ErrorPopup>}
            <Switch>
              <ProtectedRoute exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/redirect' component={Redirect} />
            </Switch>
          </Wrapper>
      </AppStyled> 
    </>
  );
}

export default App;

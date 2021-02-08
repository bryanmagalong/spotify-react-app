import React from 'react';
import {Switch, Route} from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyles from './theme/globalStyles';
import Login from './components/Login';

const AppStyled = styled.div`
  background: linear-gradient(to bottom, ${props => props.theme.colors.subLight}, ${props => props.theme.colors.main});
  min-height: 100vh;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <AppStyled>
        <Switch>
          {/* TODO: redirect to /login if not logged in */}
          <Route exact path='/' component={Login} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </AppStyled>
    </>
  );
}

export default App;

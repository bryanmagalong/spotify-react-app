import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, useHistory } from 'react-router-dom';
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
import Error404 from '../components/Error404';
import Playlist from '../components/Playlist';
import Album from '../components/Album';

import { hideError } from '../features/errors/errorActions';
import { deleteAuthHeader } from '../utils/functions';

const App = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const { error, isOpen } = useSelector((state) => state.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if(!error.status) return;
    
    if(error.status === 404) {
      dispatch(hideError());
      return history.push('/404');
    } 
    
    if(error.status === 401) {
      dispatch(hideError());
      deleteAuthHeader();
      return history.push('/login');
    };
  }, [error, dispatch, history]);

  return (
    <>
      <GlobalStyles />
      <AppStyled>
        {isLogged && <Navbar />}
        <Wrapper as="main" fullWidth>
          {isLogged && <Search />}
          {isOpen && <ErrorPopup>{error.message}</ErrorPopup>}
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/redirect" component={Redirect} />
            <ProtectedRoute path='/playlists/:playlistId' component={Playlist} />
            <ProtectedRoute path='/albums/:albumId' component={Album} />
            <Route path="*" component={Error404} />
          </Switch>
        </Wrapper>
      </AppStyled>
    </>
  );
};

const AppStyled = styled.div`
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.subLight},
    ${(props) => props.theme.colors.main} 50%
  );
  min-height: 100vh;
  display: flex;
`;

export default App;

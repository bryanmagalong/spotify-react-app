import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
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
import User from '../components/User';
import UserPLaylists from '../components/User/UserPLaylists';
import UserTopTracks from '../components/User/UserTopTracks';
import Browse from '../components/Browse';
import CategoryPlaylists from '../components/Browse/CategoryPlaylists';
import { usePrevious } from '../utils/hooks';
import { hideError } from '../features/errors/errorActions';
import { logout } from '../features/auth/authActions';



const App = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const { error, isOpen } = useSelector((state) => state.errors);
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();
  const prevPath = usePrevious(pathname);

  // useEffect for scroll restoration
  useEffect(() => {
    if(pathname !== prevPath) window.scrollTo(0,0);
  }, [pathname, prevPath]);

  useEffect(() => {
    if(!error.status) return;
    
    if(error.status === 404) {
      dispatch(hideError());
      return history.push('/404');
    } 
    
    if(error.status === 401) {
      // dispatch(hideError());
      dispatch(logout());
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
            <ProtectedRoute exact path='/me/playlists' component={UserPLaylists} />
            <ProtectedRoute exact path='/me/top-tracks' component={UserTopTracks} />
            <ProtectedRoute exact path='/me' component={User} />
            <ProtectedRoute exact path='/browse' component={Browse} />
            <ProtectedRoute exact path='/browse/categories/:categoryId/playlists' component={CategoryPlaylists} />
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
    ${(props) => props.theme.colors.subDark},
    ${(props) => props.theme.colors.main} 50%
  );
  min-height: 100vh;
  display: flex;
`;

export default App;

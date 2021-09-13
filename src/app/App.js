import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { usePrevious } from '../utils/hooks';
import { hideError } from '../features/errors/errorActions';
import { logout } from '../features/auth/authActions';
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
import UserTopArtists from '../components/User/UserTopArtists';
import Browse from '../components/Browse';
import CategoryPlaylists from '../components/Browse/CategoryPlaylists';
import SearchResults from '../components/Search/SearchResults';
import TracksResultsExtended from '../components/Extended/TracksResultsExtended';
import ArtistsResultsExtended from '../components/Extended/ArtistsResultsExtended';
import AlbumsResultsExtended from '../components/Extended/AlbumsResultsExtended';
import PlaylistsResultsExtended from '../components/Extended/PlaylistsResultsExtended';
import NewReleasesExtended from '../components/Extended/NewReleasesExtended';

const App = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();
  const prevPath = usePrevious(pathname);
  const { error, isOpen } = useSelector((state) => state.errors);
  const errorMessage =
    error.status === 401
      ? 'Session expirée. Veuillez vous reconnecter.'
      : error.message;

  // useEffect for scroll restoration
  useEffect(
    () => {
      if (pathname !== prevPath) window.scrollTo(0, 0);
    },
    [ pathname, prevPath ],
  );

  useEffect(
    () => {
      if (!error.status) return;

      if (error.status === 404) {
        dispatch(hideError());
        return history.push('/404');
      }

      if (error.status === 401) {
        dispatch(logout());
        return history.push('/login');
      }
    },
    [ error, dispatch, history ],
  );

  return (
    <React.Fragment>
      <GlobalStyles />
      <AppStyled>
        {isLogged && <Navbar />}
        <Wrapper as="main" fullWidth>
          {isLogged && <Search />}
          {isOpen && <ErrorPopup>{errorMessage}</ErrorPopup>}
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/redirect" component={Redirect} />
            <ProtectedRoute
              path="/playlists/:playlistId"
              component={Playlist}
            />
            <ProtectedRoute path="/albums/:albumId" component={Album} />
            <ProtectedRoute
              exact
              path="/me/playlists"
              component={UserPLaylists}
            />
            <ProtectedRoute
              exact
              path="/me/top-tracks"
              component={UserTopTracks}
            />
            <ProtectedRoute
              exact
              path="/me/top-artists"
              component={UserTopArtists}
            />
            <ProtectedRoute exact path="/me" component={User} />
            <ProtectedRoute exact path="/browse" component={Browse} />
            <ProtectedRoute
              exact
              path="/browse/new-releases"
              component={NewReleasesExtended}
            />
            <ProtectedRoute
              exact
              path="/browse/categories/:categoryId/playlists"
              component={CategoryPlaylists}
            />
            <ProtectedRoute
              exact
              path="/search/:queryInput"
              component={SearchResults}
            />
            <ProtectedRoute
              exact
              path="/search/:queryInput/tracks"
              component={TracksResultsExtended}
            />
            <ProtectedRoute
              exact
              path="/search/:queryInput/artists"
              component={ArtistsResultsExtended}
            />
            <ProtectedRoute
              exact
              path="/search/:queryInput/albums"
              component={AlbumsResultsExtended}
            />
            <ProtectedRoute
              exact
              path="/search/:queryInput/playlists"
              component={PlaylistsResultsExtended}
            />
            <ProtectedRoute
              exact
              path="/search/:queryInput"
              component={SearchResults}
            />
            <Route path="*" component={Error404} />
          </Switch>
        </Wrapper>
      </AppStyled>
    </React.Fragment>
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

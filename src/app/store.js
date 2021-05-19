import { createStore, compose, applyMiddleware } from 'redux';
import authMiddleware from '../features/auth/authMiddleware';
import playlistMiddleware from '../features/playlists/playlistMiddleware';
import albumMiddleware from '../features/albums/albumMiddleware';
import userMiddleware from '../features/user/userMiddleware';
import browseMiddleware from '../features/browse/browseMiddleware';
import searchMiddleware from '../features/search/searchMiddleware';
import playerMiddleware from '../features/player/playerMiddleware';
import rootReducer from './rootReducer';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    authMiddleware,
    playerMiddleware,
    playlistMiddleware,
    albumMiddleware,
    userMiddleware,
    browseMiddleware,
    searchMiddleware,
  ),
);

// == Store
const store = createStore(rootReducer, enhancers);

// == Export
export default store;

import { createStore, compose, applyMiddleware } from 'redux';
import authMiddleware from '../features/auth/authMiddleware';
import playlistMiddleware from '../features/playlists/playlistMiddleware';
import rootReducer from './rootReducer';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(authMiddleware, playlistMiddleware),
);

// == Store
const store = createStore(rootReducer, enhancers);

// == Export
export default store;

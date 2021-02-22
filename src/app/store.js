import { createStore, compose, applyMiddleware } from 'redux';
import authMiddleware from '../features/auth/authMiddleware';
import playlistMiddleware from '../features/playlists/playlistMiddleware';
import userMiddleware from '../features/user/userMiddleware';
import rootReducer from './rootReducer';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(authMiddleware, playlistMiddleware, userMiddleware),
);

// == Store
const store = createStore(rootReducer, enhancers);

// == Export
export default store;

import { createStore, compose, applyMiddleware } from 'redux';
import authMiddleware from '../features/auth/authMiddleware';
import rootReducer from './rootReducer';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(authMiddleware));

// == Store
const store = createStore(rootReducer, enhancers);

// == Export
export default store;

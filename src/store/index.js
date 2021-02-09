import { createStore, compose, applyMiddleware } from 'redux';
import authMiddleware from '../middleware/authMiddleware';
import rootReducer from '../reducers';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(authMiddleware));

// == Store
const store = createStore(rootReducer, enhancers);

// == Export
export default store;

import { combineReducers } from 'redux';
import authReducer from '../features/auth/authReducer';
import errorReducer from '../features/errors/errorReducer';

export default combineReducers({ authReducer, errorReducer });

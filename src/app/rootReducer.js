import { combineReducers } from 'redux';
import authReducer from '../features/auth/authReducer';
import errorReducer from '../features/errors/errorReducer';
import playlistReducer from '../features/playlists/playlistReducer';

export default combineReducers({ authReducer, errorReducer, playlistReducer });

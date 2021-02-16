import { combineReducers } from 'redux';
import auth from '../features/auth/authReducer';
import errors from '../features/errors/errorReducer';
import playlists from '../features/playlists/playlistReducer';

export default combineReducers({ auth, errors, playlists });

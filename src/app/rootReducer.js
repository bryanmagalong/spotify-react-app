import { combineReducers } from 'redux';
import auth from '../features/auth/authReducer';
import errors from '../features/errors/errorReducer';
import playlists from '../features/playlists/playlistReducer';
import user from '../features/user/userReducer';

export default combineReducers({ auth, errors, user, playlists });

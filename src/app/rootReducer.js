import { combineReducers } from 'redux';
import auth from '../features/auth/authReducer';
import errors from '../features/errors/errorReducer';
import playlists from '../features/playlists/playlistReducer';
import albums from '../features/albums/albumReducer';
import user from '../features/user/userReducer';
import search from '../features/search/searchReducer';

export default combineReducers({
  auth,
  errors,
  user,
  playlists,
  albums,
  search,
});

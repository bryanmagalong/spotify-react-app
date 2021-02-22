import { FETCH_PLAYLISTS_SUCCESS } from './playlistActions';

const initialState = {
  list: [],
};

const playlistReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PLAYLISTS_SUCCESS:
      return {
        ...state,
        list: [ ...action.payload ],
      };
    default:
      return state;
  }
};

export default playlistReducer;

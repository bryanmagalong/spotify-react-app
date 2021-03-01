import {
  FETCH_PLAYLISTS_SUCCESS,
  FETCH_PLAYLIST_BY_ID_SUCCESS,
} from './playlistActions';

const initialState = {
  list: [],
  playlist: {},
  trackList: [],
};

const playlistReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PLAYLISTS_SUCCESS:
      return {
        ...state,
        list: [ ...action.payload ],
      };
    case FETCH_PLAYLIST_BY_ID_SUCCESS:
      return {
        ...state,
        playlist: { ...action.payload },
        trackList: [ ...action.payload.tracks.items ].map((item) => ({
          added_at: item.added_at,
          duration: item.track.duration_ms,
          id: item.track.id,
          name: item.track.name,
          explicit: item.track.explicit,
          artist: {
            name: item.track.artists[0].name,
            id: item.track.artists[0].id,
          },
          album: {
            name: item.track.album.name,
            id: item.track.album.id,
          },
        })),
      };
    default:
      return state;
  }
};

export default playlistReducer;

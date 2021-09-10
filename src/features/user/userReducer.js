import {
  FETCH_MY_TOP_ARTISTS_SUCCESS,
  FETCH_MY_TOP_TRACKS_SUCCESS,
  FETCH_MY_PLAYLISTS_SUCCESS,
  FETCH_CURRENT_USER_SUCCESS,
} from './userActions';

const initialState = {
  profile: null,
  playlists: {
    items: [],
    itemsHome: [],
    total: 0,
  },
  topArtistsList: {
    items: [],
    total: 0,
  },
  topTracksList: {
    items: [],
    total: 0,
  },
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_CURRENT_USER_SUCCESS:
      return {
        ...state,
        profile: { ...action.payload },
      };
    case FETCH_MY_PLAYLISTS_SUCCESS:
      return {
        ...state,
        playlists: {
          ...state.playlists,
          items: [ ...action.payload.items ],
          itemsHome: [ ...action.payload.items ].splice(0, 6),
          total: action.payload.total,
        },
      };
    case FETCH_MY_TOP_ARTISTS_SUCCESS:
      return {
        ...state,
        topArtistsList: {
          ...state.topArtistsList,
          items: [ ...action.payload.items ],
          total: action.payload.total,
        },
      };
    case FETCH_MY_TOP_TRACKS_SUCCESS:
      return {
        ...state,
        topTracksList: {
          ...state.topTracksList,
          items: [ ...action.payload.items ],
          total: action.payload.total,
        },
      };
    default:
      return state;
  }
};

export default userReducer;

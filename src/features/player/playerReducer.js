import {
  FETCH_USER_CURRENT_PLAYBACK_INFO_SUCCESS,
  PAUSE_SONG,
  PLAY_SONG,
} from './playerActions';

const initialState = {
  playback: {
    context: {},
    track: {},
  },
  isPlaying: false,
  audio: null,
};

const playerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_USER_CURRENT_PLAYBACK_INFO_SUCCESS:
      return {
        ...state,
        playback: {
          context: { ...action.payload.context },
          track: { ...action.payload.track },
        },
        audio: new Audio(action.payload.track.preview_url),
      };
    case PLAY_SONG:
      return {
        ...state,
        isPlaying: true,
      };
    case PAUSE_SONG:
      return {
        ...state,
        isPlaying: false,
      };
    default:
      return state;
  }
};

export default playerReducer;

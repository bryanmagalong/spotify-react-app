import {
  FETCH_USER_CURRENT_PLAYBACK_INFO_SUCCESS,
  PAUSE_SONG,
  PLAY_SONG,
} from './playerActions';

const initialState = {
  track: {
    preview_url: null,
  },
  isPlaying: false,
  audio: null,
};

const playerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_USER_CURRENT_PLAYBACK_INFO_SUCCESS:
      if (state.audio && state.isPlaying) {
        state.audio.pause();
        return {
          ...state,
          track: { ...action.payload },
          isPlaying: false,
          audio: new Audio(action.payload.preview_url),
        };
      }

      return {
        ...state,
        track: { ...action.payload },
        audio: new Audio(action.payload.preview_url),
      };
    case PLAY_SONG:
      state.audio.play();
      return {
        ...state,
        isPlaying: true,
      };
    case PAUSE_SONG:
      state.audio.pause();
      return {
        ...state,
        isPlaying: false,
      };
    default:
      return state;
  }
};

export default playerReducer;

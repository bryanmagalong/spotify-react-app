export const FETCH_USER_CURRENT_PLAYBACK_INFO =
  'FETCH_USER_CURRENT_PLAYBACK_INFO';
export const FETCH_USER_CURRENT_PLAYBACK_INFO_SUCCESS =
  'FETCH_USER_CURRENT_PLAYBACK_INFO_SUCCESS';
export const PLAY_SONG = 'PLAY_SONG';
export const PAUSE_SONG = 'PAUSE_SONG';
export const START_NEW_PLAYBACK = 'START_NEW_PLAYBACK';

export const fetchUserCurrentPlaybackInfo = () => ({
  type: FETCH_USER_CURRENT_PLAYBACK_INFO,
});

export const fetchUserCurrentPlaybackInfoSuccess = (payload) => ({
  type: FETCH_USER_CURRENT_PLAYBACK_INFO_SUCCESS,
  payload,
});

export const playSong = () => ({
  type: PLAY_SONG,
});

export const pauseSong = () => ({
  type: PAUSE_SONG,
});

export const startNewPlayback = (payload) => ({
  type: START_NEW_PLAYBACK,
  payload,
});

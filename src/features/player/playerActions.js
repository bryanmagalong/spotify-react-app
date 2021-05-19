export const FETCH_USER_CURRENT_PLAYBACK_INFO =
  'FETCH_USER_CURRENT_PLAYBACK_INFO';
export const FETCH_USER_CURRENT_PLAYBACK_INFO_SUCCESS =
  'FETCH_USER_CURRENT_PLAYBACK_INFO_SUCCESS';

export const fetchUserCurrentPlaybackInfo = () => ({
  type: FETCH_USER_CURRENT_PLAYBACK_INFO,
});

export const fetchUserCurrentPlaybackInfoSuccess = (payload) => ({
  type: FETCH_USER_CURRENT_PLAYBACK_INFO_SUCCESS,
  payload,
});

export const FETCH_PLAYLIST_BY_ID = 'FETCH_PLAYLIST_BY_ID';
export const FETCH_PLAYLIST_BY_ID_SUCCESS = 'FETCH_PLAYLIST_BY_ID_SUCCESS';

export const fetchPlaylistById = (payload) => ({
  type: FETCH_PLAYLIST_BY_ID,
  payload,
});

export const fetchPlaylistByIdSuccess = (payload) => ({
  type: FETCH_PLAYLIST_BY_ID_SUCCESS,
  payload,
});

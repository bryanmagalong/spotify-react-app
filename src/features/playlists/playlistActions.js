export const FETCH_PLAYLISTS = 'FETCH_PLAYLISTS';
export const FETCH_PLAYLISTS_SUCCESS = 'FETCH_PLAYLISTS_SUCCESS';

export const fetchPlaylist = (payload) => ({
  type: FETCH_PLAYLISTS,
  payload,
});

export const fetchPlaylistSuccess = (payload) => ({
  type: FETCH_PLAYLISTS_SUCCESS,
  payload,
});

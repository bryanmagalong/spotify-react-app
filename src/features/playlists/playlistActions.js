export const FETCH_PLAYLISTS = 'FETCH_PLAYLISTS';
export const FETCH_PLAYLISTS_SUCCESS = 'FETCH_PLAYLISTS_SUCCESS';

export const fetchPlaylist = () => ({
  type: FETCH_PLAYLISTS,
});

export const fetchPlaylistSuccess = (payload) => ({
  type: FETCH_PLAYLISTS_SUCCESS,
  payload,
});

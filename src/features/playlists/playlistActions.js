export const FETCH_PLAYLISTS = 'FETCH_PLAYLISTS';
export const FETCH_PLAYLISTS_SUCCESS = 'FETCH_PLAYLISTS_SUCCESS';
export const FETCH_PLAYLIST_BY_ID = 'FETCH_PLAYLIST_BY_ID';
export const FETCH_PLAYLIST_BY_ID_SUCCESS = 'FETCH_PLAYLIST_BY_ID_SUCCESS';

export const fetchPlaylists = (payload) => ({
  type: FETCH_PLAYLISTS,
  payload,
});

export const fetchPlaylistsSuccess = (payload) => ({
  type: FETCH_PLAYLISTS_SUCCESS,
  payload,
});

export const fetchPlaylistById = (payload) => ({
  type: FETCH_PLAYLIST_BY_ID,
  payload,
});

export const fetchPlaylistByIdSuccess = (payload) => ({
  type: FETCH_PLAYLIST_BY_ID_SUCCESS,
  payload,
});

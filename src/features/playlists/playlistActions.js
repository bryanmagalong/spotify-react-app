export const FETCH_PLAYLISTS = 'FETCH_PLAYLISTS';
export const FETCH_PLAYLISTS_SUCCESS = 'FETCH_PLAYLISTS_SUCCESS';
export const FETCH_TOP_ARTISTS = 'FETCH_TOP_ARTISTS';
export const FETCH_TOP_ARTISTS_SUCCESS = 'FETCH_TOP_ARTISTS_SUCCESS';

export const fetchPlaylist = (payload) => ({
  type: FETCH_PLAYLISTS,
  payload,
});

export const fetchPlaylistSuccess = (payload) => ({
  type: FETCH_PLAYLISTS_SUCCESS,
  payload,
});

export const fetchTopArtist = (payload) => ({
  type: FETCH_PLAYLISTS,
  payload,
});

export const fetchTopArtistSuccess = (payload) => ({
  type: FETCH_PLAYLISTS_SUCCESS,
  payload,
});

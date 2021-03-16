export const FETCH_MY_TOP_ARTISTS = 'FETCH_MY_TOP_ARTISTS';
export const FETCH_MY_TOP_ARTISTS_SUCCESS = 'FETCH_MY_TOP_ARTISTS_SUCCESS';
export const FETCH_MY_TOP_TRACKS = 'FETCH_MY_TOP_TRACKS';
export const FETCH_MY_TOP_TRACKS_SUCCESS = 'FETCH_MY_TOP_TRACKS_SUCCESS';
export const FETCH_MY_PLAYLISTS = 'FETCH_MY_PLAYLISTS';
export const FETCH_MY_PLAYLISTS_SUCCESS = 'FETCH_MY_PLAYLISTS_SUCCESS';

export const fetchMyPlaylists = (payload) => ({
  type: FETCH_MY_PLAYLISTS,
  payload,
});

export const fetchMyPlaylistsSuccess = (payload) => ({
  type: FETCH_MY_PLAYLISTS_SUCCESS,
  payload,
});

export const fetchMyTopArtists = (payload) => ({
  type: FETCH_MY_TOP_ARTISTS,
  payload,
});

export const fetchMyTopArtistsSuccess = (payload) => ({
  type: FETCH_MY_TOP_ARTISTS_SUCCESS,
  payload,
});

export const fetchMyTopTracks = (payload) => ({
  type: FETCH_MY_TOP_TRACKS,
  payload,
});

export const fetchMyTopTracksSuccess = (payload) => ({
  type: FETCH_MY_TOP_TRACKS_SUCCESS,
  payload,
});

import fetch from 'isomorphic-fetch';
import { ADD_PODCASTS, LOAD_PODCAST_EPISODE,
        ADD_TO_PLAYLIST } from '../actions';

const PODCAST_API_URL = '/api/podcasts';

export function addPodcasts(podcasts) {
  return {
    type: ADD_PODCASTS,
    payload: podcasts,
  };
}

export function getPodcasts() {
  return (dispatch) => {
    fetch(PODCAST_API_URL)
      .then(response => response.json())
      .then(podcasts => dispatch(addPodcasts(podcasts)));
  };
}

export function loadPodcastEpisode(episode) {
  return {
    type: LOAD_PODCAST_EPISODE,
    payload: episode,
  };
}

export function addPodcastEpisodeToPlaylist(episode) {
  return {
    type: ADD_TO_PLAYLIST,
    payload: episode,
  };
}

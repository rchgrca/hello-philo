import { DELETE_FROM_PLAYLIST, LOAD_PODCAST_EPISODE } from '../actions';

export function deletePodcastEpisodeFromPlaylist(episode) {
  return {
    type: DELETE_FROM_PLAYLIST,
    payload: episode,
  };
}

export function loadPodcastEpisode(episode) {
  return {
    type: LOAD_PODCAST_EPISODE,
    payload: episode,
  };
}

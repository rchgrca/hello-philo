import { LOAD_PODCAST_EPISODE } from '../actions';

export function loadPodcastEpisode(episode) {
  return {
    type: LOAD_PODCAST_EPISODE,
    payload: episode,
  };
}

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as podcastActions from '../action-creators/podcasts';
import { SaveIcon } from './icons';
import styles from '../styles/podcast-episode-list';


function handleAdd(props, ep) {
  props.addPodcastEpisodeToPlaylist(ep);
}

function PodcastEpisodeList(props) {
  const { title: [podcastTitle = ''] = [], item: episodes = [],
    routeParams, loadPodcastEpisode } = props;

  const formattedEps = episodes.map(({ enclosure, title: [title] }) => ({
    podcastTitle,
    title,
    src: enclosure[0].$.url,
    podcastId: routeParams.podcastId,
  }));

  return (
    <div className={styles.episodeListContainer}>
      <h1 className={styles.episodePodcastTitle}>{podcastTitle}</h1>
      <ol className={styles.episodeList}>
        {
          formattedEps.map((ep, i) => (
            <li key={`${i}-${ep.title}`} className={styles.episodeListItem}>
              <div className={styles.episodeLink}>
                <div className={styles.iconContainer} onClick={() => handleAdd(props, ep)}>
                  <SaveIcon classNames={styles.icon} />
                </div>
                <div onClick={() => loadPodcastEpisode(ep)}>{ep.title}</div>
              </div>
            </li>
          ))
        }
      </ol>
    </div>
  );
}

PodcastEpisodeList.propTypes = {
  title: PropTypes.array,
  item: PropTypes.array,
  routeParams: PropTypes.object,
  loadPodcastEpisode: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { routeParams }) => state.podcasts[routeParams.podcastId] || {};
const mapDispatchToProps = (dispatch) => bindActionCreators(podcastActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PodcastEpisodeList);

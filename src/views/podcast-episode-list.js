import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as podcastActions from '../action-creators/podcasts';
import styles from '../styles/podcast-episode-list';

function PodcastEpisodeList(props) {
  const { title: [podcastTitle = ''] = [], item: episodes = [], routeParams } = props;

  const formattedEps = episodes.map(({ enclosure, title: [title] }) => ({
    podcastTitle,
    title,
    src: enclosure[0].$.url,
    podcastId: routeParams.podcastId,
  }));

  return (
    <div className={styles.episodeListContainer}>
      <h1>{podcastTitle}</h1>
      <ul className={styles.episodeList}>
        {
          formattedEps.map((ep) => (
            <li
              key={ep.title} className={styles.episodeListItem} title={ep.title}
              onClick={() => props.loadPodcastEpisode(ep)}
            >
              <div className={styles.episodeAddButton} title="Add to playlist" onClick={addToPlaylist}><i className="fa fa-plus-square" aria-hidden="true"></i></div>
              <div>
                {ep.title}
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

function addToPlaylist(e){
    e.preventDefault();
    console.log("RICH",e)
}
PodcastEpisodeList.propTypes = {
  loadPodcastEpisode: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { routeParams }) => state.podcasts[routeParams.podcastId] || {};
const mapDispatchToProps = (dispatch) => bindActionCreators(podcastActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PodcastEpisodeList);

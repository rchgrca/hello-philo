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

  const playlistData = (true) ? getAddToPlaylistData() : getDeleteFromPlaylistData();

  return (
    <div className={styles.episodeListContainer}>
      <h1>{podcastTitle}</h1>
      <ul className={styles.episodeList}>
        {
          formattedEps.map((ep, i) => (
            <li key={`${i}-${ep.title}`} className={styles.episodeListItem} title={ep.title}>
              <div className={styles.episodeButton}><i className={`fa ${playlistData.fonticon}`} aria-hidden="true" title={playlistData.title} onClick={() => playlistData.handler(props, ep)}></i></div>
              <div className={styles.episodeLink} onClick={() => props.loadPodcastEpisode(ep)}>
                {ep.title}
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

function addToPlaylist(props, ep){
    props.addPodcastEpisodeToPlaylist(ep)
}

function deleteFromPlaylist(props, ep){
    props.deletePodcastEpisodeFromPlaylist(ep)
}

function getAddToPlaylistData(){
    return {
        fonticon: "fa-plus-square",
        title: "Add to playlist",
        handler: addToPlaylist
    }
}

function getDeleteFromPlaylistData(){
    return {
        fonticon: "fa-minus-square",
        title: "Delete from playlist",
        handler: deleteFromPlaylist
    }
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

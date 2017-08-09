import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import * as podcastActions from '../action-creators/podcasts';
import { isEmpty } from '../utils';
import styles from '../styles/playlist.scss';

function deleteFromPlaylist(props, ep) {
  props.deletePodcastEpisodeFromPlaylist(ep);
}

function getDeleteFromPlaylistData() {
  return {
    fonticon: 'fa-minus-square',
    title: 'Delete from playlist',
    handler: deleteFromPlaylist,
  };
}

function PlayList(props) {
  const oEmptyPlaylist = {
    'Playlist Empty': {
      podcastId: '',
      podcastTitle: '',
      src: '',
      title: 'Playlist Empty',
    },
  };

  const { playlist } = props;

  const isPlaylistEmpty = isEmpty(playlist) ? true : false;

  const thisPlaylist = isPlaylistEmpty ? oEmptyPlaylist : playlist;

  const episodes = Object.keys(thisPlaylist);

  const formattedEps = episodes.map(episode => thisPlaylist[episode]);

  const playlistData = getDeleteFromPlaylistData();

  const handlePlayEpisode = (ep) => {
    if(!isPlaylistEmpty){
      props.loadPodcastEpisode(ep);
    }
  }

  const displayPodcast = (ep) => (ep.podcastId === '' ? '' : <Link to={`/${ep.podcastId}`}>podcast: {ep.podcastId}</Link>);

  return (
    <div className={styles.episodeListContainer}>
      <h1>Playlist</h1>
      <ol className={styles.episodeList}>
        {
          formattedEps.map((ep, i) => (
            <li key={`${i}-${ep.title}`} className={styles.episodeListItem} title={ep.title}>
              <div className={styles.episodeButton}>
                <i className={`fa ${playlistData.fonticon}`} title={playlistData.title} onClick={() => playlistData.handler(props, ep)} />
              </div>
              <div className={styles.episodeLink} onClick={() => handlePlayEpisode(ep)}>
                {ep.title}
              </div>
              <div className={styles.episodePodcast}>{displayPodcast(ep)}</div>
            </li>
          ))
        }
      </ol>
    </div>
  );
}

PlayList.propTypes = {
  loadPodcastEpisode: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => bindActionCreators(podcastActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayList);

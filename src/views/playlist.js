import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import * as podcastActions from '../action-creators/podcasts';
import { ClearIcon } from './icons';
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
    'There are no episodes in the queue': {
      podcastId: '',
      podcastTitle: '',
      src: '',
      title: 'There are no episodes in the queue',
    },
  };

  const { playlist, loadPodcastEpisode } = props;

  const isPlaylistEmpty = isEmpty(playlist);

  const thisPlaylist = isPlaylistEmpty ? oEmptyPlaylist : playlist;

  const episodes = Object.keys(thisPlaylist);

  const formattedEps = episodes.map(episode => thisPlaylist[episode]);

  const playlistData = getDeleteFromPlaylistData();

  const episodeListCSS = isPlaylistEmpty ? styles.episodeListItemEmpty : styles.episodeListItem;

  const handlePlayEpisode = (ep) => {
    if (!isPlaylistEmpty) {
      loadPodcastEpisode(ep);
    }
  };

  const displayPodcast = (ep) => (ep.podcastId === '' ? '' : <Link to={`/${ep.podcastId}`}>{ep.podcastId}</Link>);

  const displayClearIcon = () => (isPlaylistEmpty ? '' : <ClearIcon classNames={styles.icon} />);

  return (
    <div className={styles.episodeListContainer}>
      <h1 className={styles.episodePlaylistTitle}>Playlist</h1>
      <ol className={styles.episodeList}>
        {
          formattedEps.map((ep, i) => (
            <li key={`${i}-${ep.title}`} className={episodeListCSS} title={ep.title}>
              <div>
                <div className={styles.iconContainer} onClick={() => playlistData.handler(props, ep)} title="Delete">
                  {displayClearIcon()}
                </div>
                <div className={styles.episodeLink} onClick={() => handlePlayEpisode(ep)}>
                  {ep.title}
                  <div className={styles.episodePodcast}>{displayPodcast(ep)}</div>
                </div>
              </div>
            </li>
          ))
        }
      </ol>
    </div>
  );
}

PlayList.propTypes = {
  playlist: PropTypes.object,
  loadPodcastEpisode: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => bindActionCreators(podcastActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayList);

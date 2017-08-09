import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import * as playerActions from '../action-creators/player';
import styles from '../styles/player';

function Player(props) {
  const { player: { title, podcastTitle, src }, playlist, loadPodcastEpisode,
          routing: {
            locationBeforeTransitions: {
              pathname,
            },
          } } = props;

  const aPlaylistTitles = Object.keys(playlist);
  const getNextPlaylistTitle = () => {
    const nextIndex = aPlaylistTitles.findIndex((element) => element === title) + 1;
    const index = nextIndex === aPlaylistTitles.length ? 0 : nextIndex;
    return playlist[aPlaylistTitles[index]];
  };

  const handleEpisodeEnd = () => {
    loadPodcastEpisode(getNextPlaylistTitle());
  };

  const audioEl = src ? <audio src={src} controls autoPlay onEnded={handleEpisodeEnd} /> : null;

  const isPlaylist = pathname.includes('/playlist') ? '' : <Link to={'/playlist'}>Playlist</Link>;

  return (
    <div className={styles.playerContainer}>
      <div className={styles.player}>
        <div className={styles.playerNowPlaying}>{podcastTitle} - {title}</div>
        {audioEl}
        <div>{isPlaylist}</div>
      </div>
    </div>
  );
}
Player.propTypes = {
  title: PropTypes.string,
  podcastTitle: PropTypes.string,
  src: PropTypes.string,
  player: PropTypes.object,
  playlist: PropTypes.object,
  routing: PropTypes.object,
  loadPodcastEpisode: PropTypes.func,
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => bindActionCreators(playerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import * as playerActions from '../action-creators/player';
import styles from '../styles/player';

function Player(props) {
  const { player: {
    title, podcastTitle, src
  }, playlist } = props;

  const aPlaylistTitles = Object.keys(playlist);
  const getNextPlaylistTitle = () => {
    return playlist[aPlaylistTitles[aPlaylistTitles.findIndex((element) => element === title) + 1]];
  }

  const handleEpisodeEnd = () => {
    props.loadPodcastEpisode(getNextPlaylistTitle());
  }

  const audioEl = src ? <audio src={src} controls autoPlay onEnded={handleEpisodeEnd} /> : null;

  return (
    <div className={styles.playerContainer}>
      <div className={styles.player}>
        <div className={styles.playerNowPlaying}>{podcastTitle} - {title}</div>
        {audioEl}
        <div><Link to={'/playlist'}>Playlist</Link></div>
      </div>
    </div>
  );
}
Player.propTypes = {
  title: PropTypes.string,
  podcastTitle: PropTypes.string,
  src: PropTypes.string,
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => bindActionCreators(playerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);

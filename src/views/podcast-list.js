import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Podcast from './podcast-list-item';
import styles from '../styles/podcast-list';
import * as podcastActions from '../action-creators/podcasts';

function PodcastList(props) {
  const { podcasts = [] } = props;
  const titles = Object.keys(podcasts);
  return (
    <div>
      <h1 className={styles.podcastTitle}>Podcasts</h1>
      <ul className={styles.podcastList}>
        {
          titles.map(title => <Podcast key={title} {...podcasts[title]} />)
        }
      </ul>
    </div>
  );
}
PodcastList.propTypes = {
  podcasts: PropTypes.object,
};

const mapStateToProps = ({ podcasts }) => ({ podcasts });
const mapDispatchToProps = (dispatch) => bindActionCreators(podcastActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PodcastList);

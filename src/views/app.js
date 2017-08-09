import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from '../styles/app';
import Sidebar from './sidebar';
import Player from './player';
import { LogoIcon } from './icons';

function App(props) {
  return (
    <div className={styles.layout}>
      <div className={styles.topLayout}>
        <div className={styles.main}>
          <Link to="/" className={styles.logo}><LogoIcon classNames={styles.icon} /></Link>
          {props.children}
        </div>
      </div>
      <Player />
    </div>
  );
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;

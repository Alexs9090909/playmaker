import React, { useState } from 'react';
// import './App.css';
import styles from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import Tracklist from '../Tracklist/Tracklist';




const App = () => {

  const [trackSearchList, setTrackSearchList] = useState([]);

  let trackExampleApp = {
    name: 'un dos tres',
    artist : 'Lionel Messi xxx',
    album : 'allez le bleu',
    id : 'truc',
  };

  const tracklistExampleApp = [trackExampleApp,trackExampleApp,trackExampleApp,trackExampleApp];

  // setTrackSearchList(tracklistExampleApp);

  return (
    <div className={styles.Container}>
      <div className={styles.BlueSection}>
        <div className={styles.SearchContainer}>
          <h1 className={styles.SearchTitle}>Search</h1>
          <SearchBar className={styles.SearchBar} />
          <Tracklist tracklistData={tracklistExampleApp} />
        </div>
      </div>
      <div className={styles.RedSection}>
        <div className={styles.PlaylistContainer}>
            <h1 className={styles.PlaylistTitle}>Playlist</h1>
            <div className={styles.Playlist}></div>    
        </div>    
      </div>
    </div>
  );
};

export default App;
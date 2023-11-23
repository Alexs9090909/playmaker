import React from 'react';
import styles from './Track.module.css';



function Track(props){
    return (
        <div className={styles.TrackContainer}>
            <span className={styles.Track}>{props.trackData.name} by {props.trackData.artist} </span>
        </div>
    )
}

export default Track;
import React, { useState } from 'react';
import styles from './SearchBar.module.css';




function SearchBar(){

    const [searchTerms, setSearchTerms] = useState('');

    function handleChange(event) {
        setSearchTerms(event.target.input);
    }

    return (
        <div>
            <div className={styles.SearchBarContainer}>
                <input type='text' placeholder='Track ?' className={styles.SearchBarInput} onChange={handleChange}></input>
            </div>
            <div className={styles.SearchButtonContainer}>
                <p>Search</p>
            </div>
        </div>
    )
}


export default SearchBar;
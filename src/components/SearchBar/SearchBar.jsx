import { useState } from 'react';
import styles from './SearchBar.module.css';
function SearchBar({onSearch}) {
    const [term, setTerm] = useState('');
    const handleTermChange = (event) => {
        setTerm(event.target.value);
    };
    const search = () => {
        onSearch(term);
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            search();
        }
    };
    return (
        <div className={styles.searchBar} role="search">
            <input
                className={styles.searchBar__input}
                type="text"
                placeholder="Enter a song, album, or artist"
                aria-label="Search term"
                value={term}
                onChange={handleTermChange}
                onKeyDown={handleKeyPress}
            />
            <button onClick={search} className={styles.searchBar__button} type="button" aria-label="Search">
                Search
            </button>
        </div>
    );
}

export default SearchBar;

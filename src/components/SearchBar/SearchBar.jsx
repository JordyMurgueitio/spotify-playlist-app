import styles from './SearchBar.module.css';
function SearchBar() {
    return (
        <div className={styles.searchBar} role="search">
            <input
                className={styles.searchBar__input}
                type="text"
                placeholder="Enter a song, album, or artist"
                aria-label="Search term"
            />
            <button className={styles.searchBar__button} type="button" aria-label="Search">
                Search
            </button>
        </div>
    );
}

export default SearchBar;

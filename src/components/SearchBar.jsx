// src/components/SearchBar.jsx
function SearchBar() {
  return (
    <div className="search-bar" role="search">
      <input
        className="search-bar__input"
        type="text"
        placeholder="Enter a song, album, or artist"
        aria-label="Search term"
      />
      <button className="btn" type="button" aria-label="Search">
        Search
      </button>
    </div>
  );
}

export default SearchBar;

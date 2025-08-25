// src/components/SearchResults.jsx
import Tracklist from "../Tracklist/Tracklist";

function SearchResults({ tracks }) {
  return (
    <section className="panel">
      <h2 className="panel__title">Results</h2>
      <Tracklist tracks={tracks} mode="add" />
    </section>
  );
}

export default SearchResults;

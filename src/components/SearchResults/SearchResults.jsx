import styles from "./SearchResults.module.css";
import Tracklist from "../Tracklist/Tracklist";

function SearchResults({ tracks }) {
  return (
    <section className={styles.panel}>
      <h2 className={styles.panel__title}>Results</h2>
      <Tracklist tracks={tracks} mode="add" />
    </section>
  );
};

export default SearchResults;

import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";

function Playlist({ name, tracks }) {
  return (
    <section className={styles.panel}>
      {/* En este paso dejamos el value fijo. Más adelante será un input controlado */}
      <input
        className={styles.playlist__name}
        type="text"
        defaultValue={name}
        aria-label="Playlist name"
      />

      <Tracklist tracks={tracks} mode="remove" />

      <button className={`btn btn--primary ${styles.btn}`} type="button" aria-label="Save to Spotify">
        Save to Spotify
      </button>
    </section>
  );
}

export default Playlist;

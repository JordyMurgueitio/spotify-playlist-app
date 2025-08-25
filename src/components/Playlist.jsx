// src/components/Playlist.jsx
import Tracklist from "./Tracklist";

function Playlist({ name, tracks }) {
  return (
    <section className="panel">
      {/* En este paso dejamos el value fijo. Más adelante será un input controlado */}
      <input
        className="playlist__name"
        type="text"
        defaultValue={name}
        aria-label="Playlist name"
      />

      <Tracklist tracks={tracks} mode="remove" />

      <button className="btn btn--primary" type="button" aria-label="Save to Spotify">
        Save to Spotify
      </button>
    </section>
  );
}

export default Playlist;

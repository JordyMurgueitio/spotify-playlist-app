import React from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";

function Playlist({ name, tracks, onRemove, onNameChange }) {
    return (
        <section className={styles.panel}>
            {/* En este paso dejamos el value fijo. Más adelante será un input controlado */}
            <input
                className={styles.playlist__name}
                type="text"
                value={name}
                aria-label="Playlist name"
                onChange={(e) => onNameChange(e.target.value)} // Actualizamos el nombre de la playlist
            />

            <Tracklist tracks={tracks} mode="remove" onRemove={onRemove} />

            <button className={`btn btn--primary ${styles.btn}`} type="button" aria-label="Save to Spotify">
                Save to Spotify
            </button>
        </section>
    );
}

export default Playlist;

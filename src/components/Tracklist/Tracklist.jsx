import React from "react";
import styles from "./Tracklist.module.css";
import Track from "../Track/Track";

function Tracklist({ tracks, mode, onAdd, onRemove }) {
  return (
    <div className={styles.tracklist}>
      {tracks.map((track) => (
        <Track key={track.id} track={track} mode={mode} onAdd={onAdd} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default Tracklist;

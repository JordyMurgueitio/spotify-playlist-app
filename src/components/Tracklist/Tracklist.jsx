// src/components/Tracklist.jsx
import Track from "../Track/Track";

function Tracklist({ tracks, mode }) {
  return (
    <div className="tracklist">
      {tracks.map((track) => (
        <Track key={track.id} track={track} mode={mode} />
      ))}
    </div>
  );
}

export default Tracklist;

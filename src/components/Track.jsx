// src/components/Track.jsx
function Track({ track, mode }) {
  const isAdd = mode === "add";
  const actionLabel = isAdd ? "Add track" : "Remove track";
  const actionSymbol = isAdd ? "+" : "–";

  return (
    <article className="track">
      <div className="track__meta">
        <h3 className="track__name">{track.name}</h3>
        <p className="track__sub">
          {track.artist} <span className="track__sep">•</span> {track.album}
        </p>
      </div>

      <button
        className="btn btn--icon"
        type="button"
        aria-label={actionLabel}
        title={actionLabel}
        // sin onClick por ahora (paso 3 = estático)
      >
        {actionSymbol}
      </button>
    </article>
  );
}

export default Track;

import React from "react";
import styles from "./Track.module.css";

function Track({ track, mode }) {
	const isAdd = mode === "add";
	const actionLabel = isAdd ? "Add track" : "Remove track";
	const actionSymbol = isAdd ? "+" : "-";

	return (
		<article className={styles.track}>
			<h3 className={styles.track__name}>{track.name}</h3>
			<div className={styles.track__info}>
				<div className={styles.track__details}>
					<p className={styles.track__artist}>
						{track.artist}
					</p>
					<p className={styles.track__album}>
						{track.album}
					</p>
				</div>
				<button
					className={`${styles.btn} ${styles["btn--icon"]}`}
					type="button"
					aria-label={actionLabel}
					title={actionLabel}
					// sin onClick por ahora (paso 3 = estático)
				>
					{actionSymbol}
				</button>
			</div>
		</article>
	);
};

export default Track;

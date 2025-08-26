import React from "react";
import styles from "./SearchResults.module.css";
import Tracklist from "../Tracklist/Tracklist";

function SearchResults({ tracks, onAdd }) {
	return (
		<section className={styles.panel}>
			<h2 className={styles.panel__title}>Results</h2>
			<Tracklist tracks={tracks} mode="add" onAdd={onAdd} />
		</section>
	);
};

export default SearchResults;

// src/App.jsx
import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import styles from './App.module.css';




function App() {
	const [searchResults, setSearchResults] = useState([
		{ id: "1", name: "Shape of You", artist: "Ed Sheeran", album: "Divide", uri: "spotify:track:1" },
		{ id: "2", name: "Blinding Lights", artist: "The Weeknd", album: "After Hours", uri: "spotify:track:2" },
		{ id: "3", name: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia", uri: "spotify:track:3" },
	]);
	const [playlist, setPlaylist] = useState([
		{ id: "10", name: "Yellow", artist: "Coldplay", album: "Parachutes", uri: "spotify:track:10" },
		{ id: "11", name: "Fix You", artist: "Coldplay", album: "X&Y", uri: "spotify:track:11" },
	]);
	const [playlistName, setPlaylistName] = useState("New Playlist");
	const addTrack = (track) => {
		if (playlist.find((savedTrack) => savedTrack.id === track.id)) {
			return;
		}
		setPlaylist((prevPlaylist) => [...prevPlaylist, track]);
	};
	const removeTrack = (track) => {
		setPlaylist((prevPlaylist) => 
			prevPlaylist.filter((savedTrack) => savedTrack.id !== track.id)
		);
	};
	return (
		<div className={styles.app}>
			<header className={styles.app__header}>
				<h1>Jammming</h1>
			</header>
			<main className={styles.app__main}>
				<SearchBar />
				{/* Dos columnas: Results y Playlist */}
				<section className={styles.app__columns}>
					<SearchResults tracks={searchResults} onAdd={addTrack}  />
					<Playlist name={playlistName} tracks={playlist} onRemove={removeTrack} />
				</section>
			</main>
		</div>
	);
};

export default App;

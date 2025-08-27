// src/App.jsx
import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../spotify/SpotifyAuth";
import styles from './App.module.css';


const CLIENT_ID = "8aed6c0704e54dc29669e22578d58898"; // 👈 pega aquí tu client_id de Spotify
const REDIRECT_URI = "https://jordymurgueitio.github.io/spotify-playlist-app/"; // 👈 o tu GitHub Pages URL
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const SCOPES = "playlist-modify-public playlist-modify-private";


function App() {
	const [searchResults, setSearchResults] = useState([]);
	const [playlistTracks, setPlaylistTracks] = useState([]);
	const [playlistName, setPlaylistName] = useState("New Playlist");
	const [token, setToken] = useState("");
	// Al cargar la app, revisamos si ya tenemos un token en la URL
	useEffect(() => {
		const hash = window.location.hash;
		let token = window.localStorage.getItem("token");

		if (!token && hash) {
		token = hash
			.substring(1)
			.split("&")
			.find((elem) => elem.startsWith("access_token"))
			.split("=")[1];

		window.location.hash = ""; // limpiamos el hash
		window.localStorage.setItem("token", token);
		}
		setToken(token);
	}, []);

	const logout = () => {
		setToken("");
		window.localStorage.removeItem("token");
	};
	/* Function to search for tracks */
	const search = async (term) => {
		try {
			const results = await Spotify.searchTracks(term, token);
			setSearchResults(results);
		} catch (error) {
			console.error("Error searching for tracks:", error);
		}
	};
	/* Function to add track to playlist */
	const addTrack = (track) => {
		if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
			return;
		}
		setPlaylistTracks((prevPlaylist) => [...prevPlaylist, track]);
	};
	/* Function to remove track from playlist */
	const removeTrack = (track) => {
		setPlaylistTracks((prevPlaylist) => 
			prevPlaylist.filter((savedTrack) => savedTrack.id !== track.id)
		);
	};
	return (
		<div className={styles.app}>
			<header className={styles.app__header}>
				<h1>Jammming</h1>
				{!token ? (
					<a
					href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(
						SCOPES
					)}`}
					>
					<button>Login con Spotify</button>
					</a>
				) : (
					<button onClick={logout}>Logout</button>
				)}
			</header>
			<main className={styles.app__main}>
				<SearchBar onSearch={search} />
				{/* Dos columnas: Results y Playlist */}
				<section className={styles.app__columns}>
					<SearchResults tracks={searchResults} onAdd={addTrack}  />
					<Playlist name={playlistName} tracks={playlistTracks} onRemove={removeTrack} onNameChange={setPlaylistName} />
				</section>
			</main>
		</div>
	);
};

export default App;

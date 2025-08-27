

const Spotify = {
    async searchTracks(term, token) {
        if (!token) {
            throw new Error("Access token is not set");
        }
        const response = await fetch(
            `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(term)}`,
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        const jsonResponse = await response.json();
        if (!jsonResponse.tracks) return [];
        return jsonResponse.tracks.items.map((track) => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri,
        }));
    },
};

export default Spotify;

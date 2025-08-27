let accessToken= "";

const Spotify = {
    setAccessToken(token) {
        accessToken = token;
    },
    async searchTracks(term) {
        if (!accessToken) {
            throw new Error("Access token is not set");
        }
        const response = await fetch(
            `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(term)}`,
            {
                headers: { Authorization: `Bearer ${accessToken}` },
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

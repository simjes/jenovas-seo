import { SpotifyApi } from "@spotify/web-api-ts-sdk";

export const spotifyClient = SpotifyApi.withClientCredentials(
	import.meta.env.SPOTIFY_CLIENT_ID,
	import.meta.env.SPOTIFY_CLIENT_SECRET,
);

export const getShowDetails = async () => {
	const showDetails = await spotifyClient.shows.get(
		"0jxTtqiycCBwCcXGqGawoa",
		"NO",
	);
	return showDetails;
};

export const getEpisodeDetails = async (id: string) => {
	const episodeDetails = await spotifyClient.episodes.get(id, "NO");
	return episodeDetails;
};

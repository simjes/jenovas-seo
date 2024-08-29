import { SpotifyApi } from "@spotify/web-api-ts-sdk";

export const spotifyClient = SpotifyApi.withClientCredentials(
  import.meta.env.SPOTIFY_CLIENT_ID,
  import.meta.env.SPOTIFY_CLIENT_SECRET,
);

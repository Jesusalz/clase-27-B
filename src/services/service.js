import axios from 'axios';

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;

const authEndpoint = 'https://accounts.spotify.com/authorize';
const tokenEndpoint = 'https://accounts.spotify.com/api/token';

export function getSpotifyAuthUrl() {
  const scopes = 'user-read-private user-read-email';
  return `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;
}

export async function getAccessToken(code) {
  const response = await axios.post(tokenEndpoint, null, {
    params: {
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirectUri,
    },
    headers: {
      Authorization: 'Basic ' + btoa(`${clientId}:${clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  return response.data.access_token;
}

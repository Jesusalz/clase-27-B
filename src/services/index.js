import axios from 'axios';

// Configuración de variables de entorno
const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;

// Endpoints de la API de Spotify
const authEndpoint = 'https://accounts.spotify.com/authorize';
const tokenEndpoint = 'https://accounts.spotify.com/api/token';

// Función para obtener la URL de autenticación de Spotify
export function getSpotifyAuthUrl() {
  const scopes = 'user-read-private user-read-email';
  return `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;
}

// Función para obtener el token de acceso
export async function getAccessToken(code) {
  try {
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
  } catch (error) {
    console.error('Error al obtener el token de acceso:', error);
    throw error; // Lanza el error para manejarlo en otro lugar si es necesario
  }
}

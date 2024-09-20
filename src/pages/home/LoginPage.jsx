import React from 'react';
import { getSpotifyAuthUrl } from '../services';

function LoginPage() {
  const handleLogin = () => {
    window.location.href = getSpotifyAuthUrl();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button onClick={handleLogin} className="bg-green-500 text-white px-6 py-2 rounded">
        Iniciar sesión con Spotify
      </button>
    </div>
  );
}

export default LoginPage;

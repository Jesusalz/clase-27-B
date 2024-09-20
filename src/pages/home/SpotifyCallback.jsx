import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getAccessToken } from '../../services';  

function SpotifyCallback() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const code = searchParams.get('code');
    if (code) {
      getAccessToken(code).then((token) => {
        
        console.log('Token de acceso:', token);
        navigate('/home'); 
      });
    }
  }, [searchParams, navigate]);

  return <div>Redireccionando...</div>;
}

export default SpotifyCallback;

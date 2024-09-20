import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/home/LoginPage';
import SpotifyCallback from './pages/home/SpotifyCallback'; // Nueva ruta de callback

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/callback" element={<SpotifyCallback />} /> {/* Ruta de callback */}
    </Routes>
  );
}

export default App;

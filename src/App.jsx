import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/home/LoginPage';
import RegisterPage from './pages/home/RegisterPage';
import SpotifyCallback from './pages/home/SpotifyCallback';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/callback" element={<SpotifyCallback />} />
    </Routes>
  );
}

export default App;

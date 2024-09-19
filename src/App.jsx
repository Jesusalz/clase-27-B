import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage, HomePage, LoginPage, RegisterPage } from './pages'; 
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

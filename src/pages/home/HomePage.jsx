import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-4 text-center md:text-5xl">Página de Inicio</h1>
      <p className="mb-6 text-center md:text-lg">Bienvenido a la página de inicio. Aquí puedes iniciar sesión o registrarte para explorar más.</p>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <Link to="/login">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;

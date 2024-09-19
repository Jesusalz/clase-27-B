import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-4 text-center md:text-5xl">Bienvenido a mi Aplicación</h1>
      <p className="mb-6 text-center md:text-lg">Explora el contenido increíble que tenemos para ti.</p>
      <Link to="/home">
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Ir a Inicio
        </button>
      </Link>
    </div>
  );
}

export default LandingPage;

import React from 'react';

function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4">
      <div className="bg-gray-700 rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h2>
        <form>
          <input type="email" placeholder="Correo Electrónico" className="w-full p-2 mb-4 rounded bg-gray-600 text-white" required />
          <input type="password" placeholder="Contraseña" className="w-full p-2 mb-4 rounded bg-gray-600 text-white" required />
          <button type="submit" className="bg-green-500 hover:bg-green-600 w-full py-2 rounded">
            Iniciar Sesión
          </button>
        </form>
        <a href="/register" className="block mt-4 text-blue-300 hover:underline text-center">¿No tienes cuenta? Regístrate</a>
      </div>
    </div>
  );
}

export default LoginPage;

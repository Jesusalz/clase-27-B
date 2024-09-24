import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Clase 27
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/home" className="text-white hover:text-gray-400">Home</Link>
            </li>
            <li>
              <Link to="/login" className="text-white hover:text-gray-400">Login</Link>
            </li>
            <li>
              <Link to="/register" className="text-white hover:text-gray-400">Register</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

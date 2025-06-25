import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="text-white" style={{ backgroundColor: '#5EC269' }}>
      <nav className="container mx-auto flex items-center justify-between p-4 flex-wrap">
        {/* Logo/Brand Name */}
        <div className="text-xl font-bold">
          Nachhaltige Ernährung
        </div>
        {/* Hamburger menu button (mobile) */}
        <button 
          className="text-green-50 md:hidden block focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Menü umschalten"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
          </svg>
        </button>
        {/* Nav Links */}
        <ul className={`w-full md:w-auto md:flex md:items-center mt-2 md:mt-0 ${menuOpen ? "" : "hidden"}`}>
          <li className="md:ml-4">
            <NavLink 
              to="/" 
              className="block md:inline-block py-2 px-4 hover:bg-green-600 rounded" 
              onClick={() => setMenuOpen(false)}
            >Startseite</NavLink>
          </li>
          <li className="md:ml-4">
            <NavLink 
              to="/fleisch" 
              className="block md:inline-block py-2 px-4 hover:bg-green-600 rounded"
              onClick={() => setMenuOpen(false)}
            >Fleischbasiert</NavLink>
          </li>
          <li className="md:ml-4">
            <NavLink 
              to="/vegetarisch" 
              className="block md:inline-block py-2 px-4 hover:bg-green-600 rounded"
              onClick={() => setMenuOpen(false)}
            >Vegetarisch</NavLink>
          </li>
          <li className="md:ml-4">
            <NavLink 
              to="/vegan" 
              className="block md:inline-block py-2 px-4 hover:bg-green-600 rounded"
              onClick={() => setMenuOpen(false)}
            >Vegan</NavLink>
          </li>
          <li className="md:ml-4">
            <NavLink 
              to="/co2-rechner" 
              className="block md:inline-block py-2 px-4 hover:bg-green-600 rounded"
              onClick={() => setMenuOpen(false)}
            >CO₂-Rechner</NavLink>
          </li>
          <li className="md:ml-4">
            <NavLink 
              to="/quiz" 
              className="block md:inline-block py-2 px-4 hover:bg-green-600 rounded"
              onClick={() => setMenuOpen(false)}
            >Quiz</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;

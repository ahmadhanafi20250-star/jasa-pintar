import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-indigo-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">Jasa Pintar</div>
        <nav className="space-x-6">
          <Link to="/" className="hover:text-indigo-200">Home</Link>
          <Link to="/tentang" className="hover:text-indigo-200">Tentang</Link>
          <Link to="/layanan" className="hover:text-indigo-200">Layanan</Link>
          <Link to="/kontak" className="hover:text-indigo-200">Kontak</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

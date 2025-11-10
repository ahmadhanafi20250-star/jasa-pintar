import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Layanan", href: "#services" },
    { name: "Cara Kerja", href: "#how" },
    { name: "Tim", href: "#team" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center h-16 px-4">
        {/* Logo */}
        <h1
          className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? "text-blue-600" : "text-white drop-shadow-sm"
          }`}
        >
          Jasa Pintar
        </h1>

        {/* Menu Desktop */}
        <div
          className={`hidden md:flex gap-4 transition-colors duration-300 ${
            isScrolled ? "text-gray-700" : "text-white"
          }`}
        >
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`px-3 py-1 border rounded-md transition ${
                isScrolled
                  ? "border-gray-300 hover:bg-gray-100 hover:text-blue-600"
                  : "border-white hover:bg-white hover:text-blue-600"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Tombol WhatsApp */}
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noreferrer"
          className={`hidden md:inline-block px-4 py-2 rounded-md text-sm font-medium transition ${
            isScrolled
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-white text-green-700 hover:bg-green-500 hover:text-white"
          }`}
        >
          WhatsApp
        </a>

        {/* Hamburger Button */}
        <button
          className={`md:hidden transition-colors ${
            isScrolled ? "text-gray-700" : "text-white"
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div
          className={`md:hidden transition-all duration-300 ${
            isScrolled ? "bg-white" : "bg-blue-600"
          } border-t border-gray-200 shadow-md`}
        >
          <div className="flex flex-col items-center py-3 space-y-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`w-11/12 text-center px-3 py-2 border rounded-md transition ${
                  isScrolled
                    ? "border-gray-300 hover:bg-gray-100 hover:text-blue-600 text-gray-700"
                    : "border-white text-white hover:bg-white hover:text-blue-600"
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className={`w-11/12 text-center px-4 py-2 rounded-md text-sm font-medium transition ${
                isScrolled
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-white text-green-700 hover:bg-green-500 hover:text-white"
              }`}
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-10 border-t">
      <p className="text-gray-600 text-sm">
        © {new Date().getFullYear()} Jasa Pintar — Semua hak cipta dilindungi.
      </p>
      <p className="text-gray-500 text-xs mt-1">
        Dibuat dengan ❤️ menggunakan React & TailwindCSS
      </p>
    </footer>
  );
}

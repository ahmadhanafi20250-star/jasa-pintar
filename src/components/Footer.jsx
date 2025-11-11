import React from "react";
import { FaInstagram, FaShoppingBag, FaTiktok, FaTelegramPlane, FaStore } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-8 mt-10 border-t">
      <div className="max-w-6xl mx-auto px-4">
        {/* Logo / Nama */}
        <h3 className="text-xl font-bold text-blue-600 mb-3">Jasa Pintar</h3>

        {/* Sosial Media */}
        <div className="flex justify-center gap-6 mb-4">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/jasapintar10?igsh=MXU5Mmk4MWp3am55ZA=="
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-pink-600 transition"
            aria-label="Instagram"
          >
            <FaInstagram size={26} />
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/jasapintarr"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-sky-500 transition"
            aria-label="Telegram"
          >
            <FaTelegramPlane size={26} />
          </a>

          {/* Shopee */}
          <a
            href="https://shopee.co.id/jasapintar10"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-orange-500 transition"
            aria-label="Shopee"
          >
            <FaShoppingBag size={26} />
          </a>

          {/* Tokopedia */}
          <a
            href="https://tk.tokopedia.com/ZSygoDJka/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-green-600 transition"
            aria-label="Tokopedia"
          >
            <FaStore size={26} />
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@jasapintar10?_r=1&_t=ZS-91J7Q6kHoqS"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-black transition"
            aria-label="TikTok"
          >
            <FaTiktok size={26} />
          </a>
        </div>

        {/* Teks bawah */}
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Jasa Pintar — Semua hak cipta dilindungi.
        </p>
        <p className="text-gray-500 text-xs mt-1">
          Dirancang untuk membantu penyusunan tugas dan penelitian Anda.
        </p>
      </div>
    </footer>
  );
}

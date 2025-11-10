import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50 text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Kontak Kami</h2>
        <p className="text-gray-600 mb-6">
          Siap membantu Anda menyelesaikan tugas atau skripsi dengan cepat dan rapi.
        </p>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md"
        >
          Hubungi via WhatsApp
        </a>
      </div>
    </section>
  );
}
<section id="contact" className="py-20 bg-white text-center">
  <h2 className="text-3xl font-bold text-blue-600 mb-6">Hubungi Kami</h2>
  <p className="text-gray-600 mb-8">
    Kami siap membantu Anda 24 jam — klik tombol di bawah untuk konsultasi langsung via WhatsApp.
  </p>
  <a
    href="https://wa.me/6281234567890"
    target="_blank"
    rel="noreferrer"
    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold transition"
  >
    Chat via WhatsApp
  </a>
</section>

import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 text-center">
      <h2 className="text-4xl font-extrabold text-gray-900">
        Jasa Pintar — Solusi Tugas & Skripsi
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-gray-600">
        Kami membantu pengerjaan Bab 1–3, Bab 5, pengisian kuesioner,
        Turnitin, PPT, dan tugas akademik lainnya.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <a
          href="#contact"
          className="bg-blue-600 text-white px-5 py-3 rounded-md"
        >
          Pesan Sekarang
        </a>
        <a
          href="#services"
          className="border border-gray-300 px-5 py-3 rounded-md text-gray-700"
        >
          Lihat Layanan
        </a>
      </div>
    </section>
  );
}
<section
  id="home"
  className="bg-gradient-to-b from-blue-600 to-blue-100 text-white py-24 text-center"
>
  <h2 className="text-4xl md:text-5xl font-bold mb-4">Solusi Cerdas Pengerjaan Tugas Anda</h2>
  <p className="text-lg mb-8 text-blue-50">
    Kami membantu pengerjaan Bab 1–3, Bab 5, Kuesioner, Turnitin, PPT, dan tugas lainnya dengan cepat dan terpercaya.
  </p>
  <div className="flex justify-center gap-4">
    <a
      href="https://wa.me/6281234567890"
      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold transition"
    >
      Hubungi Kami
    </a>
    <a
      href="#services"
      className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-100 transition"
    >
      Lihat Layanan
    </a>
  </div>
</section>

import React from "react";

export default function Pricing() {
  const packages = [
    {
      name: "Paket Standar",
      price: "Rp150.000",
      desc: "Cocok untuk pengerjaan Bab 1-3 sederhana atau tugas kuliah ringan.",
      features: [
        "Waktu pengerjaan 3-5 hari",
        "1x revisi gratis",
        "Format sesuai panduan kampus",
      ],
      highlight: false,
    },
    {
      name: "Paket Premium",
      price: "Rp250.000",
      desc: "Untuk Bab 1-5, laporan lengkap, atau kebutuhan skripsi lebih kompleks.",
      features: [
        "Waktu pengerjaan 2-4 hari",
        "2x revisi gratis",
        "Free konsultasi WA 24 jam",
        "File bisa disesuaikan format kampus",
      ],
      highlight: true,
    },
    {
      name: "Paket Express",
      price: "Rp350.000",
      desc: "Khusus untuk deadline cepat atau pengerjaan prioritas.",
      features: [
        "Waktu pengerjaan 1-2 hari",
        "Revisi cepat & prioritas",
        "Update progress harian",
        "Garansi kepuasan 100%",
      ],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-10">
        Pilihan Paket Layanan
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {packages.map((p, i) => (
          <div
            key={i}
            className={`border rounded-2xl shadow-sm hover:shadow-md transition p-6 ${
              p.highlight ? "bg-blue-50 border-blue-300 scale-105" : "bg-white"
            }`}
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              {p.name}
            </h3>
            <p className="text-3xl font-bold text-blue-600 mb-3">{p.price}</p>
            <p className="text-gray-600 mb-4">{p.desc}</p>
            <ul className="text-gray-700 text-left list-disc list-inside space-y-2 mb-6">
              {p.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 transition"
            >
              Pesan Sekarang
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

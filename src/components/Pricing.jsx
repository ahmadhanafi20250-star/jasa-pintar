import React from "react";

export default function Pricing() {
  const packages = [
    {
      name: "📘 Paket Skripsi",
      price: "Rp 1.500.000",
      desc: "Pengerjaan Skripsi Bab 1–3 oleh tim profesional sesuai panduan kampus.",
      features: [
        "Pengerjaan Bab 1–3",
        "Waktu pengerjaan 1–3 hari",
        "Dikerjakan oleh tim profesional",
        "Free revisi",
        "Sesuai panduan kampus",
      ],
      highlight: true,
    },
    {
      name: "🧾 Paket Bab 5",
      price: "Rp 150.000",
      desc: "Pengerjaan Bab 5 – Pembahasan, Kesimpulan, dan Saran secara lengkap.",
      features: [
        "Pembahasan hasil penelitian sesuai teori",
        "Kesimpulan menjawab rumusan masalah",
        "Saran praktis dan akademis",
        "revisi gratis",
        "Format sesuai panduan kampus",
      ],
      highlight: false,
    },
    {
      name: "📊 Paket Olah Data SPSS / Campur",
      price: "Rp 500.000",
      desc: "Layanan lengkap untuk olah data, output, tabel, grafik, dan interpretasi hasil.",
      features: [
        "Olah data lengkap semua variabel",
        "Output + tabel + grafik + interpretasi",
        "Analisis mediasi dan moderasi",
        "Penyesuaian panduan kampus",
        "Konsultasi sebelum & sesudah pengerjaan",
        "Revisi gratis",
      ],
      highlight: false,
    },
    {
      name: "📝 Paket Pengisian / Pembuatan Kuesioner",
      price: "Rp 600.00",
      desc: "Pembuatan dan pengisian kuesioner sesuai indikator dan kriteria responden.",
      features: [
        "Penyediaan responden real human",
        "Penyesuaian kriteria responden",
        "Pembuatan kuesioner sesuai indikator",
        "Format Word / Google Form",
        "Revisi gratis",
      ],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-10">
        Pilihan Paket Layanan
      </h2>

      {/* Grid untuk semua kartu */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8 px-4 items-stretch">
        {packages.map((p, i) => (
          <div
            key={i}
            className={`flex flex-col justify-between border rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 h-full ${
              p.highlight
                ? "bg-blue-50 border-blue-300"
                : "bg-white border-gray-200"
            }`}
          >
            {/* Bagian isi atas */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {p.name}
              </h3>
              <p className="text-3xl font-bold text-blue-600 mb-3">
                {p.price}
              </p>
              <p className="text-gray-600 mb-4">{p.desc}</p>
              <ul className="text-gray-700 text-left list-disc list-inside space-y-2 mb-6">
                {p.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </div>

            {/* Tombol di bawah */}
            <a
              href="https://wa.me/6285219843725"
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

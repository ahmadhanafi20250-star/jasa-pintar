import React from "react";

const services = [
  { title: "Pengerjaan Bab 1–3", desc: "Penulisan latar, tinjauan pustaka, dan metodologi yang rapi dan original." },
  { title: "Pengerjaan Bab 5", desc: "Analisis, pembahasan hasil, dan kesimpulan sesuai format akademik." },
  { title: "Pengisian Dan Pembuatan Kuesioner", desc: "Desain dan pengisian kuesioner penelitian kualitatif & sesuai indikator variable." },
  { title: "Turnitin", desc: "Cek kemiripan dokumen dan laporan Turnitin resmi." },
  { title: "PPT Presentasi", desc: "Desain presentasi profesional, dengan animasi ringan & visual menarik." },
  { title: "Tugas Lainnya", desc: "Revisi, formatting, pengecekan sitasi, dan konsultasi akademik." },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold">Layanan Kami</h2>
        <p className="mt-2 text-gray-600">
          Pilih layanan yang sesuai dengan kebutuhan akademikmu.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="border p-5 rounded-xl shadow-sm hover:shadow-md">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
<section id="services" className="py-20 bg-white text-center">
  <h2 className="text-3xl font-bold text-blue-600 mb-8">Layanan Kami</h2>
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
    {[
      { title: "Pengerjaan Bab 1-3", desc: "Pembuatan pendahuluan, tinjauan pustaka, dan metodologi lengkap." },
      { title: "Bab 5", desc: "Membantu analisis hasil dan kesimpulan dengan format akademik." },
      { title: "Kuesioner & Data", desc: "Pengisian dan pengolahan kuesioner berbasis Google Form atau Excel." },
      { title: "Turnitin & Revisi", desc: "Cek plagiarisme dan bantu revisi hingga lolos Turnitin." },
      { title: "PPT Presentasi", desc: "Desain slide profesional untuk sidang dan presentasi tugas akhir." },
      { title: "Tugas Lainnya", desc: "Kami juga menerima berbagai jenis tugas akademik lainnya." },
    ].map((item, idx) => (
      <div key={idx} className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
        <p className="text-gray-600">{item.desc}</p>
      </div>
    ))}
  </div>
</section>

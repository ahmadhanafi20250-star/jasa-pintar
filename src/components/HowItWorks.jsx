import React from "react";

export default function HowItWorks() {
  const steps = [
    { num: 1, title: "Hubungi Kami", desc: "Langsung kirim pesan lewat WhatsApp atau form kontak." },
    { num: 2, title: "Konsultasi & Estimasi", desc: "Kami bantu analisis kebutuhan dan memberikan harga transparan." },
    { num: 3, title: "Pengerjaan & Revisi", desc: "Tim kami akan mengerjakan dengan update rutin." },
    { num: 4, title: "Selesai & Pembayaran", desc: "Kamu terima hasil sesuai deadline dan kualitas terbaik." },
  ];

  return (
    <section id="how" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-6">Cara Kerja</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-3">{s.num}</div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

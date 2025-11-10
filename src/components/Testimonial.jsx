import React from "react";

export default function Testimonial() {
  const data = [
    {
      name: "Dewi",
      text: "Pengerjaan cepat dan hasilnya memuaskan! Bab 1-3 saya langsung acc.",
    },
    {
      name: "Rizky",
      text: "Pelayanan ramah, revisi cepat, recommended banget untuk mahasiswa.",
    },
    {
      name: "Nadia",
      text: "Harga terjangkau, komunikasi cepat lewat WA, hasil rapi dan sesuai.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-10">
        Apa Kata Klien Kami
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <p className="text-gray-600 italic mb-4">"{item.text}"</p>
            <h3 className="text-blue-600 font-semibold">{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

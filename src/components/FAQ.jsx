import React from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "Apakah hasil bisa direvisi?",
      a: "Ya, kami menyediakan revisi gratis sesuai kesepakatan awal.",
    },
    {
      q: "Apakah semua pengerjaan bersifat rahasia?",
      a: "Tentu, semua data dan file dijamin 100% privasi.",
    },
    {
      q: "Bagaimana cara pemesanan?",
      a: "Cukup klik tombol WhatsApp, jelaskan kebutuhan Anda, dan tim kami akan segera merespons.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-10">
        Pertanyaan Umum
      </h2>
      <div className="max-w-4xl mx-auto space-y-4 px-4">
        {faqs.map((f, i) => (
          <details key={i} className="border p-4 rounded-lg">
            <summary className="font-semibold cursor-pointer text-blue-600">
              {f.q}
            </summary>
            <p className="mt-2 text-gray-600">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

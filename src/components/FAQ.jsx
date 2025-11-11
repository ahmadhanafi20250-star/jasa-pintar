import React from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "Apakah hasil bisa direvisi?",
      a: "Ya, kami menyediakan revisi gratis sesuai kesepakatan awal dan panduan kampus Anda.",
    },
    {
      q: "Apakah semua pengerjaan bersifat rahasia?",
      a: "Tentu, semua data, file, dan identitas pelanggan dijamin 100% privasi dan tidak dibagikan ke pihak lain.",
    },
    {
      q: "Bagaimana cara pemesanan?",
      a: "Cukup klik tombol WhatsApp, jelaskan kebutuhan Anda (Bab berapa, jenis tugas, atau kuesioner), lalu tim kami akan segera merespons dan membantu dari awal hingga selesai.",
    },
    {
      q: "Berapa lama waktu pengerjaan?",
      a: "Rata-rata waktu pengerjaan berkisar 1–5 hari kerja, tergantung tingkat kesulitan dan jenis layanan yang dipilih.",
    },
    {
      q: "Apakah hasil pengerjaan sesuai panduan kampus?",
      a: "Ya, kami selalu menyesuaikan dengan format, struktur, dan aturan dari masing-masing kampus atau dosen pembimbing.",
    },
    {
      q: "Apakah bisa olah data dengan SPSS atau SmartPLS?",
      a: "Bisa. Kami melayani olah data menggunakan SPSS, SmartPLS, AMOS, maupun Excel lengkap dengan output, tabel, grafik, dan interpretasi hasil.",
    },
    {
      q: "Apakah bisa membantu Bab 5 saja?",
      a: "Tentu, kami bisa membantu pengerjaan Bab 5 (Pembahasan, Kesimpulan, dan Saran) secara terpisah dengan revisi gratis.",
    },
    {
      q: "Apakah menerima pembuatan PowerPoint (PPT)?",
      a: "Ya, kami bisa membuat PPT presentasi dengan desain menarik dan isi yang selaras dengan isi skripsi Anda.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-10">
        Pertanyaan Umum
      </h2>
      <div className="max-w-4xl mx-auto space-y-4 px-4">
        {faqs.map((f, i) => (
          <details
            key={i}
            className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow duration-300"
          >
            <summary className="font-semibold cursor-pointer text-blue-600 text-lg">
              {f.q}
            </summary>
            <p className="mt-2 text-gray-600 leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

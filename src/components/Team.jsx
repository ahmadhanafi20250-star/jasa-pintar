import React from "react";

const team = [
  { name: "Ahmad Hanafi", role: "Penulis & Metodologi", img: "https://i.pravatar.cc/150?img=12" },
  { name: "Siti Rahma", role: "Editor & Turnitin Specialist", img: "https://i.pravatar.cc/150?img=47" },
  { name: "Rizal", role: "Desainer PPT", img: "https://i.pravatar.cc/150?img=5" },
];

export default function Team() {
  return (
    <section id="team" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold">Tim Kami</h2>
        <p className="text-gray-600 mt-2">Profesional di bidang akademik dan desain.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((t, i) => (
            <div key={i} className="bg-gray-50 rounded-xl shadow-sm p-6">
              <img src={t.img} alt={t.name} className="w-24 h-24 rounded-full mx-auto" />
              <h3 className="mt-4 font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
<section id="team" className="py-20 bg-gray-50 text-center">
  <h2 className="text-3xl font-bold text-blue-600 mb-8">Tim Kami</h2>
  <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-4">
    {[1, 2, 3].map((i) => (
      <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md">
        <img
          src={`https://i.pravatar.cc/150?img=${i}`}
          alt="Tim Jasa Pintar"
          className="mx-auto rounded-full w-24 h-24 mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800">Anggota {i}</h3>
        <p className="text-gray-500">Spesialis Bab {i === 1 ? "1–3" : i === 2 ? "5" : "Kuesioner"}</p>
      </div>
    ))}
  </div>
</section>

import React from "react";

const team = [
  {
    name: "Ahmad Hanafi",
    role: "Pengisian Kuesioner & Membuat Website",
    img: "/foto.gue.jpg", // gambar dari folder public
  },
  {
    name: "Nur Pratama Julianto",
    role: "Editor & Turnitin Specialist",
    img: "/pratama.jpg", // gambar dari folder public
  },
];

export default function Team() {
  return (
    <section id="team" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-blue-600">Tim Kami</h2>
        <p className="text-gray-600 mt-2">Profesional di bidang akademik dan desain.</p>

        {/* grid anggota tim */}
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {team.map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl shadow-md p-6 w-64 hover:shadow-lg transition"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-24 h-24 rounded-full mx-auto object-cover"
              />
              <h3 className="mt-4 font-semibold text-lg">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

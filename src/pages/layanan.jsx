export default function Layanan() {
  const services = [
    { title: "Pembuatan Website", desc: "Website profesional, cepat, dan responsif." },
    { title: "Pengembangan Aplikasi", desc: "Aplikasi Android & iOS sesuai kebutuhan." },
    { title: "Digital Marketing", desc: "Strategi online untuk meningkatkan penjualan." },
  ];

  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">Layanan Kami</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((srv, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">{srv.title}</h3>
            <p className="text-gray-600">{srv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

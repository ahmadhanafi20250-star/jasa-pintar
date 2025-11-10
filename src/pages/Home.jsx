export default function Home() {
  return (
    <section className="text-center py-16 bg-gray-100">
      <h2 className="text-4xl font-bold mb-4">Selamat Datang di Jasa Pintar</h2>
      <p className="text-lg mb-8 max-w-xl mx-auto">
        Kami siap membantu kebutuhan digital Anda dengan solusi terbaik dan inovatif.
      </p>
      <a
        href="/layanan"
        className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
      >
        Pelajari Lebih Lanjut
      </a>

      <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto px-4">
        {["Desain Web", "Aplikasi Mobile", "SEO & Marketing"].map((layanan, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-primary">{layanan}</h3>
            <p className="text-gray-600">
              Kami menyediakan layanan {layanan.toLowerCase()} berkualitas tinggi.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Kontak() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold text-primary mb-6">Hubungi Kami</h2>
      <p className="text-gray-600 mb-8">
        Punya pertanyaan atau butuh penawaran khusus? Silakan isi form di bawah ini.
      </p>
      <form className="max-w-lg mx-auto text-left bg-gray-50 p-8 rounded-xl shadow-md">
        <label className="block mb-4">
          <span className="text-gray-700">Nama</span>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
            placeholder="Nama lengkap"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
            placeholder="email@domain.com"
          />
        </label>
        <label className="block mb-6">
          <span className="text-gray-700">Pesan</span>
          <textarea
            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
            rows="4"
            placeholder="Tulis pesan Anda..."
          ></textarea>
        </label>
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition w-full"
        >
          Kirim Pesan
        </button>
      </form>
    </section>
  );
}

import React from "react";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Ca",
      text: "Makasi ya kak, rekomen banget! Kakaknya baik, ramah, sangat membantu pengerjaannya. Mantap banget, sukses trusss ✨✨",
    },
    {
      name: "Beila",
      text: "Terima kasih kak, beneran riil human! Udah dipakai untuk riset juga dan hasilnya aman banget 😍",
    },
    {
      name: "Hanz",
      text: "Kak thanks yaa udah bantu mulai dari pembuatan kuesioner sampai penyebaran. Fast respon banget, kaget tiba-tiba udah selesai aja 😭🔥",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-10">
        Apa Kata Klien Kami
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition text-left"
          >
            <p className="text-gray-700 italic mb-4 leading-relaxed">
              “{item.text}”
            </p>
            <h3 className="text-blue-600 font-semibold text-right">— {item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

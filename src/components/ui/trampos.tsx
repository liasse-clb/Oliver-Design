import { useState } from "react";

export default function Trabalhos() {
  const categorias = ["Todos", "Calendário", "Cartões", "Adesivos", "Banners"];

  const trabalhos = [
    {
      id: 1,
      categoria: "Adesivos",
      img: "/Adesivo.webp",
      titulo: "Adesivo simples e descontraído",
    },
    {
      id: 2,
      categoria: "Adesivos",
      img: "/Adesivo2.webp",
      titulo: "Adesivo de marca",
    },
    {
      id: 3,
      categoria: "Adesivos",
      img: "/Adesivo3.webp",
      titulo: "Adesivo personalizado para pizzaria",
    },
    {
      id: 4,
      categoria: "Cartões",
      img: "/Cartão Vis.webp",
      titulo: "Cartão de Visita Moderno",
    },
    {
      id: 5,
      categoria: "Cartões",
      img: "/Cartão Vis2.webp",
      titulo: "Cartão de visitas de bijuteria",
    },
    {
      id: 6,
      categoria: "Cartões",
      img: "/Cartão Visita3.webp",
      titulo: "Cartão de profissional autonômo",
    },
    {
      id: 7,
      categoria: "Banners",
      img: "/Placa_Lona_Faixa.webp",
      titulo: "Placa de igreja",
    },
    {
      id: 8,
      categoria: "Banners",
      img: "/Wind_banner.webp",
      titulo: "Wind Banners",
    },
    {
      id: 9,
      categoria: "Banners",
      img: "/Banner1.webp",
      titulo: "Banner De Hamburgueria",
    },
    {
      id: 10,
      categoria: "Banners",
      img: "/Banner2.webp",
      titulo: "Banner para Evento de futebol",
    },
    {
      id: 11,
      categoria: "Calendário",
      img: "/Calendario.webp",
      titulo: "Mini calendário 2024",
    },
    {
      id: 12,
      categoria: "Calendário",
      img: "/Calendario2.webp",
      titulo: "Calendário de natal",
    },
    {
      id: 13,
      categoria: "Calendário",
      img: "/Calend3.webp",
      titulo: "Calendário personalizado",
    },
  ];

  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

  const filtrados =
    categoriaAtiva === "Todos"
      ? trabalhos
      : trabalhos.filter((item) => item.categoria === categoriaAtiva);

  return (
    <section className="w-full py-16 mt-14 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-[#01163d] mb-14">
          Trabalhos Já Realizados
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              className={`px-6 py-2 rounded-full border transition font-medium ${
                categoriaAtiva === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filtrados.map((item) => (
            <div
              key={item.id}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={item.img}
                alt={item.titulo}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.titulo}</h3>
                <p className="text-gray-500 text-sm">{item.categoria}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

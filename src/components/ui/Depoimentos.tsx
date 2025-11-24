import { FaStar } from "react-icons/fa";

export default function Depoimentos() {
  const depoimentos = [
    {
      nome: "Lucas Andrade",
      texto: "Atendimento impecável e impressão perfeita! Fiz cartões de visita e o resultado ficou acima do esperado.",
      img: "/lucas.jpg",
    },
    {
      nome: "Mariana Lopes",
      texto: "Entregaram meus adesivos super rápido e com qualidade profissional. Recomendo demais!",
      img: "/maria.jpg",
    },
    {
      nome: "Rafael Santos",
      texto: "Meu negócio cresceu muito depois da gestão de social media deles. Criatividade absurda!",
      img: "/rafael.jpg",
    },
  ];

  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-[#01163d] mb-14">
        O que nossos clientes dizem
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {depoimentos.map((d, i) => (
          <div
            key={i}
            className="bg-white shadow-xl p-8 border rounded-2xl hover:scale-105 transition-transform duration-300"
          >
            <div className="flex justify-center mb-4">
              <img
                src={d.img}
                alt={d.nome}
                className="w-20 h-20 rounded-full object-cover border"
              />
            </div>

            <div className="flex justify-center gap-1 mb-4 text-[#ff7c01]">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={18} />
              ))}
            </div>

            <p className="text-center text-[#01163d]/80 mb-5 leading-relaxed">
              {d.texto}
            </p>

            <h3 className="text-center text-lg font-semibold text-[#01163d]">
              {d.nome}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

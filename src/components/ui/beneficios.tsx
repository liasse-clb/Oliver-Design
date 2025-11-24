import { FaCheckCircle, FaClock, FaHandshake, FaTags } from "react-icons/fa";

export default function Beneficios() {
  const benefits = [
    {
      id: 1,
      icon: <FaCheckCircle size={40} />,
      title: "Impressão de Alta Qualidade",
      desc: "Materiais nítidos, vibrantes e com acabamento profissional.",
    },
    {
      id: 2,
      icon: <FaClock size={40} />,
      title: "Prazos Rápidos",
      desc: "Entregamos dentro do prazo combinado sem surpresas.",
    },
    {
      id: 3,
      icon: <FaHandshake size={40} />,
      title: "Atendimento Personalizado",
      desc: "Acompanhamento direto para garantir que você receba exatamente o que precisa.",
    },
    {
      id: 4,
      icon: <FaTags size={40} />,
      title: "Preços Acessíveis",
      desc: "Custo-benefício real para empresas e profissionais.",
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-[#01163d] mb-14">
          Por que escolher nossos serviços?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <div className="text-blue-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

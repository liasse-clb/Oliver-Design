import { FaUpload, FaCheckCircle, FaPrint, FaTruck } from "react-icons/fa";

export default function Processo() {
  const passos = [
    {
      titulo: "Envio do Arquivo",
      texto: "Você nos envia seus arquivos ou explica sua ideia pelo WhatsApp.",
      icone: <FaUpload size={45} className="text-[#033ead]" />,
    },
    {
      titulo: "Revisão",
      texto: "Ajustamos o arquivo, conferimos a qualidade e enviamos uma prévia.",
      icone: <FaCheckCircle size={45} className="text-[#ff0a7c]" />,
    },
    {
      titulo: "Produção",
      texto: "Imprimimos com qualidade profissional e materiais premium.",
      icone: <FaPrint size={45} className="text-[#ff7c01]" />,
    },
    {
      titulo: "Entrega",
      texto: "Você retira no local ou recebe via delivery (quando disponível).",
      icone: <FaTruck size={45} className="text-[#01163d]" />,
    },
  ];

  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-[#01163d] mb-14">
        Como trabalhamos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {passos.map((p, i) => (
          <div
            key={i}
            className="bg-white p-8 border shadow-xl rounded-2xl text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="flex justify-center mb-4">{p.icone}</div>

            <h3 className="text-xl font-semibold text-[#01163d] mb-2">
              {p.titulo}
            </h3>

            <p className="text-[#01163d]/80 leading-relaxed">
              {p.texto}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

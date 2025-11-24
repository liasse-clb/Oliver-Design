import { FaPrint, FaShareAlt, FaBullhorn } from "react-icons/fa";

export default function Servicos() {
  return (
    <section className="w-full py-16 mt-10 px-6 md:px-12 lg:px-20">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-[#01163d] mb-14">
        Nossos Serviços
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        <div className="bg-white shadow-xl p-8 rounded-2xl border hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-5">
            <FaPrint size={60} className="text-[#033ead]" />
          </div>

          <h3 className="text-2xl font-bold text-center text-[#01163d] mb-3">
            Gráfica Rápida
          </h3>

          <p className="text-center text-[#01163d]/80 mb-6 leading-relaxed">
            Produção de cartões de visita, adesivos, banners, convites,
            flyers e muito mais. Impressão de alta qualidade com acabamento profissional.
          </p>

          <div className="flex justify-center">
            <a
              href="https://wa.me/557193589409?text=Olá!%20Quero%20saber%20mais%20sobre%20serviços%20gráficos."
              target="_blank"
              className="bg-[#01163d] hover:bg-[#033ead] text-white px-6 py-3 rounded-xl font-semibold transition shadow-md"
            >
              Saber mais
            </a>
          </div>
        </div>

        <div className="bg-white shadow-xl p-8 rounded-2xl border hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-5">
            <FaShareAlt size={60} className="text-[#ff0a7c]" />
          </div>

          <h3 className="text-2xl font-bold text-center text-[#01163d] mb-3">
            Social Media
          </h3>

          <p className="text-center text-[#01163d]/80 mb-6 leading-relaxed">
            Gestão completa do seu Instagram ou negócio: criação de posts,
            identidade visual, calendário estratégico e crescimento orgânico.
          </p>

          <div className="flex justify-center">
            <a
              href="https://wa.me/557193589409?text=Olá!%20Gostaria%20de%20informações%20sobre%20gestão%20de%20social%20media."
              target="_blank"
              className="bg-[#ff0a7c] hover:bg-[#ff3a97] text-white px-6 py-3 rounded-xl font-semibold transition shadow-md"
            >
              Solicitar proposta
            </a>
          </div>
        </div>

        <div className="bg-white shadow-xl p-8 rounded-2xl border hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-5">
            <FaBullhorn size={60} className="text-[#ff7c01]" />
          </div>

          <h3 className="text-2xl font-bold text-center text-[#01163d] mb-3">
            Tráfego Pago
          </h3>

          <p className="text-center text-[#01163d]/80 mb-6 leading-relaxed">
            Campanhas otimizadas para vendas, geração de leads e atração
            de novos clientes usando Meta Ads e Google Ads.
          </p>

          <div className="flex justify-center">
            <a
              href="https://wa.me/557193589409?text=Olá!%20Quero%20saber%20mais%20sobre%20tráfego%20pago."
              target="_blank"
              className="bg-[#ff7c01] hover:bg-[#ff9a40] text-white px-6 py-3 rounded-xl font-semibold transition shadow-md"
            >
              Falar com especialista
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

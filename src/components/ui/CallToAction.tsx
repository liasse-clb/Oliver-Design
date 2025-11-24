import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function CallToActionTrabalhos() {
  return (
    <section className="w-full py-20 bg-[#01163d] text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Quer ver o que já fizemos?
        </h2>

        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Confira os projetos realizados e veja como podemos transformar suas ideias
          em resultados reais.
        </p>

        <NavLink
          to="/servico"
          className="inline-flex items-center gap-3 bg-[#ff9100] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#e07f00] transition-all duration-300"
        >
          Ver Trabalhos <FaArrowRight />
        </NavLink>

      </div>
    </section>
  );
}

import { FaLaptopHouse } from "react-icons/fa";

export default function Home() {
  return (
    <section className="min-h-[90vh] mt-16 px-6 sm:px-10 lg:px-24 flex flex-col-reverse md:flex-row items-center justify-center gap-10 pt-20 md:pt-0 text-center md:text-left">
      <div className="flex-1">
        <h1
          className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight"
          style={{ textShadow: "1px 1px 8px rgba(0, 0, 0, 0.6)" }}
        >
          Qualidade gráfica em Salvador <br />
          <span className="font-extrabold text-[#01163d] italic text-4xl sm:text-5xl md:text-7xl">
            Oliver{" "}
          </span>
          <span className="font-extrabold text-[#f56600] italic text-4xl sm:text-5xl md:text-7xl">
            Design
          </span>
        </h1>

        <p className="mt-6 font-medium text-gray-700 text-base leading-5 sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0">
          Imprima com comodidade e preços acessíveis na melhor gráfica online de
          Salvador (BA).
        </p>

        <button className="mt-6 bg-[#01163d] hover:bg-[#033ead] text-white flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-base md:text-lg transition transform hover:scale-105 duration-200 shadow-md mx-auto md:mx-0">
          <FaLaptopHouse size={22} /> Veja nossos serviços
        </button>
      </div>

      <div className="flex justify-center sm:mt-8 sm:justify-end flex-1">
        <img
          className=" max-w-[250px] -mt-10 sm:max-w-[450px] md:max-w-[480px] "
          src="/principal.webp"
          alt="Imagem principal"
        />
      </div>
    </section>
  );
}

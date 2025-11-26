import { useState } from "react";
import { FiMail, FiSend, FiUser } from "react-icons/fi";

export default function Newsletter() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();

    if (!nome || !sobrenome || !email) {
      alert("Preencha todos os campos");
      return;
    }

    alert("Obrigado por se inscrever em nossa newsletter. Fique atento para as dicas e promoções");
  }

  return (
    <section className="mt-32 w-full flex flex-col items-center px-6">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-[#01163d]">
        Fique por dentro das novidades
      </h2>

      <p className="mt-6 max-w-3xl text-center text-lg md:text-xl text-gray-700 leading-relaxed">
        Somos uma gráfica completa que une criatividade, estratégia e produção.
        Trabalhamos com gestão de tráfego pago, social media e impressão gráfica
        profissional, tudo para fortalecer sua marca e impulsionar seus resultados.
      </p>

      <p className="mt-3 max-w-3xl text-center text-lg md:text-xl text-gray-700 leading-relaxed">
        Assine nossa newsletter e receba dicas, tendências, promoções e conteúdos
        exclusivos para levar o seu negócio ainda mais longe.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 w-full max-w-lg flex flex-col gap-4">

        <div className="flex items-center gap-2 bg-white shadow-md px-4 py-3 rounded-lg">
          <FiUser className="text-[#01163d] text-xl" />
          <input
            type="text"
            placeholder="Nome"
            className="w-full outline-none text-gray-700"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2 bg-white shadow-md px-4 py-3 rounded-lg">
          <FiUser className="text-[#01163d] text-xl" />
          <input
            type="text"
            placeholder="Sobrenome"
            className="w-full outline-none text-gray-700"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2 bg-white shadow-md px-4 py-3 rounded-lg">
          <FiMail className="text-[#01163d] text-xl" />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full outline-none text-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-[#01163d] hover:bg-[#02205a] transition text-white font-semibold px-5 py-3 rounded-lg flex items-center justify-center gap-2"
        >
          Enviar
          <FiSend />
        </button>
      </form>
    </section>
  );
}

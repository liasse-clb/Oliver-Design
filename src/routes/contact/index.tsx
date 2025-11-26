import { FiPhone, FiMapPin, FiMail, FiInstagram } from "react-icons/fi";

export default function Contato() {
  return (
    <section className="mt-28 w-full flex flex-col items-center px-6">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-[#01163d]">
        Entre em Contato
      </h2>

      <p className="mt-4 text-lg md:text-xl text-center text-gray-700 max-w-2xl">
        Fale conosco para tirar dúvidas, solicitar orçamentos ou conversar sobre seu projeto.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">

        <a
          href="https://wa.me/557193589409?text=Olá%20gostaria%20de%20mais%20informações"
          target="_blank"
          className="flex items-center gap-4 bg-white shadow-md p-5 rounded-lg hover:shadow-lg transition"
        >
          <FiPhone className="text-3xl text-[#01163d]" />
          <div>
            <h3 className="font-semibold text-xl text-[#01163d]">WhatsApp</h3>
            <p className="text-gray-600">Clique para conversar</p>
          </div>
        </a>

        <a
          href="https://maps.app.goo.gl/4P1AuLsp9zmZa3vJ7?g_st=aw"
          target="_blank"
          className="flex items-center gap-4 bg-white shadow-md p-5 rounded-lg hover:shadow-lg transition"
        >
          <FiMapPin className="text-3xl text-[#01163d]" />
          <div>
            <h3 className="font-semibold text-xl text-[#01163d]">Localização</h3>
            <p className="text-gray-600">Veja onde estamos</p>
          </div>
        </a>

        <a
          href="mailto:oliverdesigndigital@gmail.com?subject=Quero+uma+impress%C3%A3o+gr%C3%A1fica&body=Quero+uma+impress%C3%A3o+gr%C3%A1fica"
          className="flex items-center gap-4 bg-white shadow-md p-5 rounded-lg hover:shadow-lg transition"
        >
          <FiMail className="text-3xl text-[#01163d]" />
          <div>
            <h3 className="font-semibold text-xl text-[#01163d]">E-mail</h3>
            <p className="text-gray-600">oliverdesigndigital@gmail.com</p>
          </div>
        </a>

        <a
          href="https://www.instagram.com/oliverdesigndigital/"
          target="_blank"
          className="flex items-center gap-4 bg-white shadow-md p-5 rounded-lg hover:shadow-lg transition"
        >
          <FiInstagram className="text-3xl text-[#01163d]" />
          <div>
            <h3 className="font-semibold text-xl text-[#01163d]">Instagram</h3>
            <p className="text-gray-600">@oliverdesigndigital</p>
          </div>
        </a>

      </div>
    </section>
  );
}

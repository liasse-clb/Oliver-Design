import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative w-full py-10">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        {/* Top */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          <div className="flex flex-col items-center md:items-start">
            <img
              className="max-w-[130px] sm:max-w-[160px] md:max-w-[180px]"
              src="Logo_Oliver.png"
              alt="Logotipo"
            />
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gray-300 pt-6">
          <p className="text-center text-base text-blue-gray-900">
            &copy; {currentYear} Oliver Design. <br /> Calebe Liasse | Eduardo
            Santos | Lucas Nicori
          </p>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <a
              href="https://wa.me/557193589409?text=Olá%20gostaria%20de%20mais%20informações"
              target="_blank"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <FaWhatsapp size={19} />
            </a>
            <a
              href="https://www.instagram.com/oliverdesigndigital/"
              target="_blank"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <FaInstagram size={19} />
            </a>

            <a
              href="https://github.com/liasse-clb/Oliver-Design"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <FaGithub size={19} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

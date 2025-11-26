import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="p-6 w-full flex justify-between items-center shadow-lg bg-white fixed top-0 left-0 z-50">
      <a href="/">
        <img src="/Logo_Oliver.png" alt="Logo do site" className="h-12 w-auto" />
      </a>

      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className="hidden md:flex">
        <ul className="flex gap-8 items-center font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-[#ff9100] "
                  : "hover:text-[#033ead] transition"
              }
            >
              Inicio
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/servico"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-[#ff9100] "
                  : "hover:text-[#033ead] transition"
              }
            >
              Produtos
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-[#ff9100] "
                  : "hover:text-[#033ead] transition"
              }
            >
              Contato
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-[#ff9100] "
                  : "hover:text-[#033ead] transition"
              }
            >
              Sobre nós
            </NavLink>
          </li>

          <li>
            <a
                href="https://wa.me/557193589409?text=Olá%20gostaria%20de%20mais%20informações"
                className="bg-[#01163d] flex gap-2 justify-center items-center px-4 py-3 rounded-lg text-white hover:bg-green-500 transition"
              >
                <FaWhatsapp size={20} /> Whatsapp
              </a>
          </li>
        </ul>
      </nav>

      {menuOpen && (
        <nav className="absolute top-[90px] right-0 w-full bg-white shadow-xl md:hidden animate-fadeIn">
          <ul className="flex flex-col gap-6 p-6 font-semibold text-center">
            <li>
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600"
              >
                Inicio
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/servico"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600"
              >
                Serviços
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600"
              >
                Contato
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600"
              >
                Sobre nós
              </NavLink>
            </li>

            <li>
              <a
                href="https://wa.me/5571988932163?text=Olá%20gostaria%20de%20mais%20informações"
                className="bg-green-500 flex gap-2 justify-center items-center px-4 py-3 rounded-md text-white hover:bg-green-600 transition"
              >
                <FaWhatsapp size={16} /> Whatsapp
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

import { useState } from 'react';
import { Check } from "../../assets/check";
import { Person } from "../../assets/person";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primary h-20 flex items-center justify-center py-4 px-6 relative">
      <div className="max-w-7xl w-full h-12 flex items-center justify-between">
        <h2 className="text-zinc-50 font-semibold text-3xl">Logo</h2>

        {/* Botão do Menu Hambúrguer */}
        <button
          className="block md:hidden text-zinc-50 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Navegação */}
        <nav className={`md:flex items-center gap-5 pr-3 ${menuOpen ? 'block pt-4' : 'hidden'} px-6 absolute md:relative top-20 md:top-0 left-0 w-full md:w-auto bg-primary md:bg-transparent`}>
          <ul className={`flex flex-col md:flex-row ${menuOpen ? 'items-start' : 'items-center'}  gap-5`}>
            <li>
              <a href="#home" className="text-lg text-zinc-50 underline font-medium">Inicio</a>
            </li>
            <li>
              <a href="#metrics" className="text-lg text-zinc-50 underline font-medium">Resultados</a>
            </li>
            <li>
              <a href="#client" className="text-lg text-zinc-50 underline font-medium">Clientes</a>
            </li>
            <li>
              <a href="#faq" className="text-lg text-zinc-50 underline font-medium">FAQ</a>
            </li>
          </ul>

          <div className={`h-full flex items-center flex-wrap ${menuOpen ? 'pb-4 gap-1' : 'gap-4'}`}>
            <button className="h-[48px] px-5 flex items-center justify-center text-base text-zinc-50 gap-1 border border-primary-100 rounded-full mt-4 md:mt-0">
              <span className="mb-1">Acompanhar pedidos</span>
              <Check />
            </button>

            {/* Botão "Entrar" dentro do menu hambúrguer */}
            <button className="h-[48px] px-5 flex items-center justify-center text-base font-bold bg-purple-200 hover:bg-purple-300 text-purple-700 gap-1 border border-primary-100 rounded-full mt-4 md:mt-0">
              <span className="mb-1">Entrar</span>
              <Person />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

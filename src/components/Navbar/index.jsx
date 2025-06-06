import { useState } from "react";
import grafismoMenu from "/assets/images/grafismo_menu_superior.png";
import logo from "/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (event, sectionId) => {
    event.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="flex items-center gap-8 px-4 sm:px-20 py-4 w-full fixed bg-green-main z-10">
      <img src={logo} className="hidden sm:block" alt="café com prosa" width={100} height={100} />

      <nav className="w-full">
        <div className="container mx-auto flex justify-between items-center">

          {/* Botão de menu hamburguer (aparece apenas em mobile) */}
          <div className="block md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>

          {/* Links do menu (escondidos no mobile, visíveis no desktop) */}
          <div className={`w-full flex flex-col lg:flex-row items-center justify-center text-white text-center lg:text-left transform transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            } lg:max-h-full lg:opacity-100 overflow-hidden lg:overflow-visible`}>
            <ul className="flex flex-col lg:flex-row lg:space-x-8 lg:items-center text-white text-center lg:text-left text-sm">
              <li>
                <a href="#section-1" onClick={(e) => handleScroll(e, '#section-1')} className="hover:text-slate-200 uppercase">Quem somos</a>
              </li>
              <img src={grafismoMenu} alt="" width={15} height={15} className="hidden md:block" />
              <li>
                <a href="#section-2" onClick={(e) => handleScroll(e, '#section-2')} className="hover:text-slate-200 uppercase">Parceiros</a>
              </li>
              <img src={grafismoMenu} alt="" width={15} height={15} className="hidden md:block" />
              <li>
                <a href="#section-3" onClick={(e) => handleScroll(e, '#section-3')} className="hover:text-slate-200 uppercase">Seja parte</a>
              </li>
              <img src={grafismoMenu} alt="" width={15} height={15} className="hidden md:block" />
              <li>
                <a href="#section-4" onClick={(e) => handleScroll(e, '#section-4')} className="hover:text-slate-200 uppercase">Fotos</a>
              </li>
              <img src={grafismoMenu} alt="" width={15} height={15} className="hidden md:block" />
              <li>
                <a href="#section-5" onClick={(e) => handleScroll(e, '#section-5')} className="hover:text-slate-200 uppercase">Calendário</a>
              </li>
              <img src={grafismoMenu} alt="" width={15} height={15} className="hidden md:block" />
              <li>
                <a href="#section-6" onClick={(e) => handleScroll(e, '#section-6')} className="hover:text-slate-200 uppercase">Nossas redes</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

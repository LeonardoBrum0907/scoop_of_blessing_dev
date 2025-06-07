import { useState } from "react";
import logo from "/logo.png";
import icon_brasil from "/assets/imagenspipo/icon_brasil.png";
import icon_eua from "/assets/imagenspipo/icon_eua.png";

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
    <header className="flex items-center gap-24 px-4 sm:px-20 py-4 w-full fixed bg-background-color z-10">
      <img src={logo} className="hidden sm:block " alt="scoop of blessing logo" width={100} height={100} />

      <nav className="w-full">
        <div className="container mx-auto flex justify-between items-center ">

          {/* Botão de menu hamburguer (aparece apenas em mobile) */}
          <div className="block md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-amber-950 focus:outline-none"
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
          <div className={`w-full flex flex-col md:flex-row items-center justify-center text-white text-center md:text-left transform transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            } md:max-h-full md:opacity-100 overflow-hidden md:overflow-visible`}>
            <ul className="flex flex-col md:flex-row md:w-full md:justify-between gap-3 text-amber-950 text-center md:text-left text-sm ">
              <li>
                <a href="#section-1" onClick={(e) => handleScroll(e, '#section-1')} className="hover:text-amber-700 uppercase">ABOUT</a>
              </li>
              <li>
                <a href="#section-2" onClick={(e) => handleScroll(e, '#section-2')} className="hover:text-amber-700 uppercase">MENU</a>
              </li>
              <li>
                <a href="#section-3" onClick={(e) => handleScroll(e, '#section-3')} className="hover:text-amber-700 uppercase">PURPOSE</a>
              </li>
              <li>
                <a href="#section-4" onClick={(e) => handleScroll(e, '#section-4')} className="hover:text-amber-700 uppercase">LOCATIONS</a>
              </li>
              <li>
                <a href="#section-5" onClick={(e) => handleScroll(e, '#section-5')} className="hover:text-amber-700 uppercase">CONTACT</a>
              </li>
              <li className="flex lg:flex-row flex-shrink-0 gap-1 justify-center">
                <button><img src={icon_brasil} alt="brazil icon" className="w-[1rem] h-[1rem] object-contain" /></button>
                <button><img src={icon_eua} alt="usa icon" className="w-[1rem] h-[1rem] object-contain" /></button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <img src={logo} className="block sm:hidden" alt="scoop of blessing logo" width={50} height={50} />
    </header>
  );
};

export default Navbar;

import icon_facebook from "/assets/imagenspipo/logo_facebook.png";
import icon_instagram from "/assets/imagenspipo/logo_instagram.png";
import icon_tiktok from "/assets/imagenspipo/logo_tiktok.png";
import icon_youtube from "/assets/imagenspipo/logo_youtube.png";
import logo from "/logo.png";

const Footer = () => {
   return (
      <footer className="flex flex-col gap-6 py-4 md:flex-row md:justify-evenly items-center w-full">
         <div className="text-center lg:text-justify">
            <p className="text-orange">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
         </div>
         <div className="flex justify-center">
            <img src={logo} className="h-[3rem] lg:h-[4.5rem]" alt="Scoop of Blessing" />
         </div>
         <div className="flex justify-center lg:justify-end items-center gap-[2rem] xl:gap-[3rem]">
            <img className="h-[1.6rem] sm:h-[2rem]" src={icon_instagram} alt="icone instagram" />
            <img className="h-[1.6rem] sm:h-[2rem]" src={icon_youtube} alt="icone youtube" />
            <img className="h-[1.6rem] sm:h-[2rem]" src={icon_facebook} alt="icone facebook" />
            <img className="h-[1.6rem] sm:h-[2rem]" src={icon_tiktok} alt="icone tiktok" />
         </div>
      </footer>
   )
}

export default Footer;
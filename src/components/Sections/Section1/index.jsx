import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ilustracao from "/assets/imagenspipo/img_ilustracao.png";

const Section1 = () => {
   useGSAP(() => {
      gsap.fromTo('.fade-in', {
         opacity: 0,
         y: 100,
         delay: 0.5,
         duration: 0.2,
      }, {
         opacity: 1,
         y: 0,
         delay: 0.5,
         duration: 0.2,
      })
   }, [])

   return (
      <section id="section-1" className="fade-in flex flex-col md:flex-row items-center justify-center gap-4 pb-4 py-[6rem] min-h-[100vh]">
         <h2 className='text-purple md:text-3xl font-light text-center text-[3rem]'>WHERE EVERY <b className="text-[3rem]">SCOOP</b></h2>
         <img src={ilustracao} alt="imagem de ilustraçao" className="w-full sm:w-2/5" />
         <h2 className='text-purple md:text-3xl font-light text-center text-[3rem]'>TELLS A <b className="text-[3rem]">STORY</b></h2>
      </section>
   )
}

export default Section1
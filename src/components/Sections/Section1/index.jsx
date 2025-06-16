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

      gsap.fromTo('.fade-in2', {
         opacity: 0,
         y: 100,
         delay: 0.5,
         duration: 0.2,
      }, {
         opacity: 1,
         y: 0,
         delay: 0.8,
         duration: 0.2,
      })

      gsap.fromTo('.fade-in3', {
         opacity: 0,
         y: 100,
         delay: 0.5,
         duration: 0.2,
      }, {
         opacity: 1,
         y: 0,
         delay: 1.1,
         duration: 0.2,
      })
   }, [])

   return (
      <section id="section-1" className="flex flex-col md:flex-row items-center justify-center gap-4 pb-4 py-[6rem] md:min-h-[100vh]">
         <h2 className='fade-in text-purple font-light text-center text-3xl md:text-5xl tracking-tighter md:w-1/3'>WHERE EVERY <b className="text-3xl md:text-5xl">SCOOP</b></h2>
         <img src={ilustracao} alt="imagem de ilustraçao" className="fade-in2 w-full sm:w-2/5" />
         <h2 className='fade-in3 text-purple font-light text-center text-3xl md:text-5xl md:w-1/3'>TELLS A <b className="text-3xl md:text-5xl">STORY</b></h2>
      </section>
   )
}

export default Section1
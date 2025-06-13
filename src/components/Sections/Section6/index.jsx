import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from "../../SectionLayout";
import icon_email from "/assets/imagenspipo/icon_email.png";
import icon_phone from "/assets/imagenspipo/logo_whatsapp.png";

//import MapboxGL from "@react-native-mapbox-gl/maps"
const Section6 = () => {

   React.useLayoutEffect(() => {
         gsap.registerPlugin(ScrollTrigger);

         // Configuração inicial - posiciona os elementos fora da tela
         gsap.set('#section6-left', { x: -150, opacity: 0 });
         gsap.set('#section6-right', { x: 150, opacity: 0 });

         // Animação da primeira div (da esquerda para direita)
         gsap.to('#section6-left', {
               x: 0,
               opacity: 1,
               duration: 0.5,
               ease: "power2.out",
               scrollTrigger: {
                     trigger: '#section-6',
                     start: "top 80%",
                     end: "bottom 20%",
                     toggleActions: "play none none reverse",
               },
         });

         // Animação da segunda div (da direita para esquerda)
         gsap.to('#section6-right', {
               x: 0,
               opacity: 1,
               duration: 0.5,
               ease: "power2.out",
               scrollTrigger: {
                     trigger: '#section-6',
                     start: "top 80%",
                     end: "bottom 20%",
                     toggleActions: "play none none reverse",
               },
         });

         return () => {
               ScrollTrigger.getAll().forEach(trigger => {
                     if (trigger.trigger && trigger.trigger.id === 'section-6') {
                           trigger.kill();
                     }
               });
         };
   }, []);

   return (
      <Section id="section-6" className="w-full flex flex-col justify-center items-center gap-[4rem] lg:flex-row lg:h-[45rem] lg:py-[0]">
         <div id="section6-left" className="lg:h-full lg:w-1/2">
            <img src="/assets/imagenspipo/map_texas_scoop.png" alt="mapa" className="h-full w-full object-contain rounded-3xl" />
         </div>

         <div id="section6-right" className="w-full lg:w-1/2 bg-white rounded-3xl flex flex-col items-center justify-center gap-2 px-10 py-12">
            <div className="flex w-full flex-col items-start font-light sm:text-[1rem] xl:text-[1.2rem] 2xl:text-[1.6rem] gap-[0.5rem]">
               <div className="flex items-center gap-[1rem]">
                  <img className="h-[75%]" src={icon_phone} />
                  <p className=" h-[75%] 2xl:h-[100%]">65 3634.1604</p>
               </div>
               <div className="flex items-center gap-[1rem]">
                  <img className="h-[75%]" src={icon_phone} />
                  <p className="h-[75%] 2xl:h-[100%]">65 98415.7999</p>
               </div>
               <div className="flex items-center gap-[1rem] pb[3rem]">
                  <img className="h-[75%]" src={icon_email} />
                  <p className="h-[75%] 2xl:h-[100%]">mail@matteosorveteriacriativa.com</p>
               </div>
            </div>
            <form className="w-full" action="" method="post">
               <div className="">
                  <label className="block my-2 font-light" htmlFor="nome">Nome:</label>
                  <input className="appearance-none focus:outline-none border-2 border-gray-300 rounded w-full py-2 px-3 leading-tight h-[3rem]" type="text" id="nome" name="nome" required="required" border="1px" />
               </div>
               <div className="2xl:flex gap-[1rem]">
                  <div className="2xl:w-[50%]">
                     <label className="block my-2 font-light" htmlFor="email">E-mail:</label>
                     <input className="appearance-none focus:outline-none border-2 border-gray-300 rounded w-full py-2 px-3 leading-tight h-[3rem]" type="email" id="email" name="email" required="required" />
                  </div>
                  <div className="2xl:w-[50%]">
                     <label className="block my-2 font-light" htmlFor="phone">Telefone:</label>
                     <input className="appearance-none focus:outline-none border-2 border-gray-300 rounded w-full py-2 px-3 leading-tight h-[3rem]" type="tel" id="phone" name="phone" required="required" />
                  </div>
               </div>
               <div>
                  <label className="block my-2 font-light" htmlFor="msg">Mensagem:</label>
                  <textarea className="appearance-none focus:outline-none border-2 border-gray-300 rounded w-full py-2 px-3 leading-tight resize-none h-[9rem]" id="msg"></textarea>
               </div>
               <div className="flex justify-center items-center">
                  <input className="text-orange border-4 border-orange rounded-full py-2 px-6 uppercase tracking-[0.3rem] mt-[1rem] h-[4rem] hover:bg-orange hover:text-white cursor-pointer transition-all duration-300" type="submit" value="SEND"></input>

               </div>
            </form>
         </div>
      </Section>
   )
}
export default Section6
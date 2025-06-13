// import React from "react";

import Section from "../../SectionLayout";
import icon_email from "/assets/imagenspipo/icon_email.png";
import icon_phone from "/assets/imagenspipo/logo_whatsapp.png";

//import MapboxGL from "@react-native-mapbox-gl/maps"
const Section6 = () => {

   // React.useLayoutEffect(() => {
   //       gsap.registerPlugin(useGSAP, ScrollTrigger);

   //       gsap.to('.fade-down-section-6', {
   //             opacity: 1,
   //             scrollTrigger: {
   //                   trigger: '.section-6',
   //                   start: "40% bottom",
   //                   end: "90% 90%",
   //                   scrub: true,
   //                   // markers: true,
   //             },
   //       })
   // }, [])

   return (
      <Section id="section-6" className="w-full">
         <div className="flex flex-col justify-center items-center gap-[4rem] lg:flex-row lg:h-[45rem]">
            <div className="lg:h-full lg:w-1/2">
               <img src="/assets/imagenspipo/mapa.png" alt="mapa" className="h-full w-full object-cover rounded-3xl" />
            </div>

            <div className="lg:h-full lg:w-1/2 bg-white rounded-3xl flex flex-col items-center justify-center gap-2 px-10 py-12">
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
         </div>
      </Section>
   )
}
export default Section6
import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from "../../SectionLayout";

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const Section5 = () => {

   React.useLayoutEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      // Configuração inicial - posiciona os elementos fora da tela
      gsap.set('#section5-left', { x: -150, opacity: 0 });
      gsap.set('#section5-right', { x: 150, opacity: 0 });

      // Animação da primeira div (da esquerda para direita)
      gsap.to('#section5-left', {
         x: 0,
         opacity: 1,
         duration: 0.5,
         ease: "power2.out",
         scrollTrigger: {
            trigger: '#section-5',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
         },
      });

      // Animação da segunda div (da direita para esquerda)
      gsap.to('#section5-right', {
         x: 0,
         opacity: 1,
         duration: 0.5,
         ease: "power2.out",
         scrollTrigger: {
            trigger: '#section-5',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
         },
      });

      return () => {
         ScrollTrigger.getAll().forEach(trigger => {
            if (trigger.trigger && trigger.trigger.id === 'section-5') {
               trigger.kill();
            }
         });
      };
   }, []);

   return (
      <Section id="section-5" className="min-h-[unset] w-full flex flex-col xl:flex-row justify-center gap-[3rem] xl:gap-[2rem]">
         <div id="section5-left" className="w-full flex flex-col items-center">
            <h1 className="title text-pink xl:pl-[3rem] xl:pr-[3rem] xl:pb-[1rem] tracking-tighter">United to Bless</h1>
            <p className="mt-[2rem] text-text-color xl:pl-[3rem] xl:pr-[3rem] xl:2xl:pr-[5rem]">At Scoop of Blessing, we don’t scoop alone. Our partners walk with us in the mission to bless lives through ice cream — from training programs to global outreach. Together, we turn purpose into action, one scoop at a time.</p>
            {/* <button className='text-pink border-4 border-pink rounded-full py-2 px-6 uppercase tracking-[0.3rem] mt-[3rem] h-[4rem]'>FIND OUT MORE</button> */}
         </div>
         <div id="section5-right" className="w-full xl:w-3/5 flex justify-between">
            <Swiper
               slidesPerView={1}
               loop={true}
               cssMode={true}
               navigation={true}
               modules={[Navigation]}
               className="mySwiper px-8"
               breakpoints={{
                  768: {
                     slidesPerView: 2,
                     spaceBetween: 10,
                  },
                  1536: {
                     slidesPerView: 3,
                     spaceBetween: 20,
                  }
               }}
            >
               <SwiperSlide className='px-16 md:px-0'>
                  <img src="/assets/imagenspipo/partner_00.png" alt="Logo of Matteo Creative Ice Cream Shop" className="w-full h-full object-contain" />
               </SwiperSlide>
               <SwiperSlide className='px-16 md:px-0'>
                  <img src="/assets/imagenspipo/partner_01.png" alt="Logo of Escola Sorvete" className="w-full h-full object-contain" />
               </SwiperSlide>
               <SwiperSlide className='px-16 md:px-0'>
                  <img src="/assets/imagenspipo/partner_02.png" alt="Logo of Gelato University Carpigiani" className="w-full h-full object-contain" />
               </SwiperSlide>
               <SwiperSlide className='px-16 md:px-0'>
                  <img src="/assets/imagenspipo/partner_03.png" alt="Logo of The Brookwood Community" className="w-full h-full object-contain" />
               </SwiperSlide>
               <SwiperSlide className='px-16 md:px-0'>
                  <img src="/assets/imagenspipo/partner_04.png" alt="Logo of Amazon's King Açaí From Brazil" className="w-full h-full object-contain" />
               </SwiperSlide>
            </Swiper>
         </div>
      </Section>
   )
}
export default Section5
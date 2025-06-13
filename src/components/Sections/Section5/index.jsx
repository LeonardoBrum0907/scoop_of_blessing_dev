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
      <Section id="section-5" className="w-full flex flex-col xl:flex-row justify-center gap-[3rem] xl:gap-[2rem]">
         <div id="section5-left" className="w-full flex flex-col items-center xl:pt-[8rem] 2xl:pt-[10rem]">
            <h1 className="title text-pink xl:pl-[3rem] xl:pr-[3rem] xl:pb-[1rem]">United to Bless</h1>
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
               className="mySwiper"
               breakpoints={{
                  1920: {
                     slidesPerView: 2,
                     spaceBetween: 20,
                  },
                  2560: {
                     slidesPerView: 2,
                     spaceBetween: 20,
                  },
               }}
            >
               <SwiperSlide>
                  <div>Slide 1</div>
               </SwiperSlide>
               <SwiperSlide>
                  <div>Slide 2</div>
               </SwiperSlide>
               <SwiperSlide>
                  <div>Slide 3</div>
               </SwiperSlide>
               <SwiperSlide>
                  <div>Slide 4</div>
               </SwiperSlide>
               <SwiperSlide>
                  <div>Slide 5</div>
               </SwiperSlide>
            </Swiper>
         </div>
      </Section>
   )
}
export default Section5
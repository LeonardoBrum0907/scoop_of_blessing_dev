import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '../../SectionLayout';


const Section3 = () => {

   React.useLayoutEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      // Configuração inicial - posiciona o elemento fora da tela à direita
      gsap.set('#section-3', { x: 150, opacity: 0 });
      gsap.set('#grafismo1', { y: "20%"});
      gsap.set('#grafismo2', { y: "146%"});

      // Animação da div .right (da direita para esquerda)
      gsap.to('#section-3', {
         x: 0,
         opacity: 1,
         duration: 0.5,
         ease: "power2.out",
         scrollTrigger: {
            trigger: '#section-3',
            start: "top 40%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
         },
      });
      gsap.to('#grafismo1', {
         y: "-63%",
         scrollTrigger: {
            scrub: 1,
            trigger: '#section-3',
            start: "top 80%",
            end: "bottom 100%",
            toggleActions: "play none none reverse",
         },
      });
      gsap.to('#grafismo2', {
         y: "63%",
         scrollTrigger: {            
            scrub: 1,
            trigger: '#section-3',
            start: "top 10%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
         },
      });

      return () => {
         ScrollTrigger.getAll().forEach(trigger => {
            if (trigger.trigger && trigger.trigger.id === 'section-3') {
               trigger.kill();
            }
         });
      };
   }, []);

   return (
      <div className='bg-[url("/assets/imagenspipo/img_video_bg.png")] bg-cover bg-center w-full flex justify-center relative'>
         <Section id="section-3" className="flex items-center justify-center md:justify-end gap-4">
            <div className='w-4/6 sm:w-1/2 md:w-2/5 bg-background-color flex flex-col p-8 rounded-[2rem] md:bg-transparent'>
               <h1 className='mb-4 title text-pink tracking-tighter'>Team delicious</h1>
               <p className='text-text-color'>Scoop of Blessing is a Brazilian-born (Matteo Sorveteria Criativa), award-winning craft ice cream company, now in the U.S., creating natural ice creams while empowering individuals with disabilities through strategic partnerships.</p>
               {/* <button className=' text-white bg-pink rounded-full py-2 px-6 uppercase tracking-[0.3rem]'>See the Magic Behind the Cone</button> */}
            </div>
         </Section>
         <img id='grafismo1' src="/assets/imagenspipo/graf_01.png" alt="grafismo1" className='absolute top-0 right-0 w-1/4 lg:w-[20rem]' />
         <img id='grafismo2' src="/assets/imagenspipo/graf_02.png" alt="grafismo2" className='absolute bottom-0 left-0 w-1/4 lg:w-[20rem]' />

      </div>
   )
}

export default Section3
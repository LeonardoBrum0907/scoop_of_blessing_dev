import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '../../SectionLayout';


const Section3 = () => {

   React.useLayoutEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      // Configuração inicial - posiciona o elemento fora da tela à direita
      gsap.set('#section-3', { x: 150, opacity: 0 });

      // Animação da div .right (da direita para esquerda)
      gsap.to('#section-3', {
         x: 0,
         opacity: 1,
         duration: 0.5,
         ease: "power2.out",
         scrollTrigger: {
            trigger: '#section-3',
            start: "top 80%",
            end: "bottom 20%",
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
            <div className='md:w-2/5 bg-background-color flex flex-col items-center p-8 rounded-[2rem] md:bg-transparent'>
               <h1 className='mb-4 title text-pink'>Team delicious</h1>
               <p className='text-text-color'>Scoop of Blessing is a Brazilian-born (Matteo Sorveteria Criativa), award-winning craft ice cream company, now in the U.S., creating natural ice creams while empowering individuals with disabilities through strategic partnerships.</p>
               {/* <button className=' text-white bg-pink rounded-full py-2 px-6 uppercase tracking-[0.3rem]'>See the Magic Behind the Cone</button> */}
            </div>
         </Section>
         <img src="/assets/imagenspipo/grafismo_01.png" alt="background" className='absolute top-0 translate-y-[-50%] right-0 w-1/4 lg:w-[20rem]' />
      </div>
   )
}

export default Section3
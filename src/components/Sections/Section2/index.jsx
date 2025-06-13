import { useState } from 'react';
import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '../../SectionLayout';
import sorveteimg from "/assets/imagenspipo/img_sorvetes_01.png";
import SectionHide from '../SectionHide';

const Section2 = () => {
   const [isOpen, setIsOpen] = useState(false)

   React.useLayoutEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      // Configuração inicial - posiciona os elementos fora da tela
      gsap.set('#section-2 .left', { x: -150, opacity: 0 });
      gsap.set('#section-2 .right', { x: 150, opacity: 0 });

      // Animação da div .left (da esquerda para direita)
      gsap.to('#section-2 .left', {
         x: 0,
         opacity: 1,
         duration: 0.5,
         ease: "power2.out",
         scrollTrigger: {
            trigger: '#section-2',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
         },
      });

      // Animação da div .right (da direita para esquerda)
      gsap.to('#section-2 .right', {
         x: 0,
         opacity: 1,
         duration: 0.5,
         ease: "power2.out",
         scrollTrigger: {
            trigger: '#section-2',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
         },
      });

      return () => {
         ScrollTrigger.getAll().forEach(trigger => {
            if (trigger.trigger && trigger.trigger.id === 'section-2') {
               trigger.kill();
            }
         });
      };
   }, []);

   function handleScroll(event, sectionId) {
      event.preventDefault();
      setIsOpen(true)
      const section = document.querySelector(sectionId);
      setTimeout(() => {
         if (section) {
            section.scrollIntoView({
               behavior: 'smooth',
               block: 'start',
            });
         }
      }, 100)
   };

   return (
      <>
         <Section id="section-2" className="min-h-[unset] md:py-[0] bg-background-color flex flex-col md:flex-row">
            <div className='left flex flex-col items-center'>
               <h1 className='text-orange title mb-4'>A scoop of our story</h1>
               <p className='text-text-color'>Think of us as your emotional support scoop — handcrafted with passion, scooped with pride, and taste-tested (maybe too much) for your happiness. Made with natural ingredients and plenty of love. Take a peek at some of our processes below.</p>
               <button
                  onClick={(e) => handleScroll(e, '#section-hide')}
                  className='text-orange border-4 border-orange rounded-full py-2 px-6 uppercase tracking-[0.3rem] mt-[3rem] h-[4rem] hover:bg-orange hover:text-white transition-all duration-300'>FIND OUT MORE</button>
            </div>
            <div className='right md:w-2/4 flex-shrink-0'>
               <img src={sorveteimg} alt="imagem do sorvete" className="w-[100%]" />
            </div>
         </Section>
         <SectionHide isOpen={isOpen} />
      </>
   )
}

export default Section2
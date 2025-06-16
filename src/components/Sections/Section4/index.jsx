import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from "../../SectionLayout";
import proposito from "/assets/imagenspipo/img_proposito.png";

const Section4 = () => {

      React.useLayoutEffect(() => {
            gsap.registerPlugin(ScrollTrigger);

            // Configuração inicial - posiciona os elementos abaixo da tela
            gsap.set('#section4-title', { y: 80, opacity: 0 });
            gsap.set('#section4-text', { y: 80, opacity: 0 });
            gsap.set('#section4-image', { y: 80, opacity: 0 });

            // Timeline para animar os elementos um de cada vez
            const tl = gsap.timeline({
                  scrollTrigger: {
                        trigger: '#section-4',
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse",
                  },
            });

            // Animação sequencial - um elemento de cada vez
            tl.to('#section4-title', {
                  y: 0,
                  opacity: 1,
                  duration: 0.6,
                  ease: "power2.out",
            })
                  .to('#section4-text', {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: "power2.out",
                  }, "-=0.3") // Começa 0.3s antes do anterior terminar
                  .to('#section4-image', {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: "power2.out",
                  }, "-=0.3"); // Começa 0.3s antes do anterior terminar

            return () => {
                  ScrollTrigger.getAll().forEach(trigger => {
                        if (trigger.trigger && trigger.trigger.id === 'section-4') {
                              trigger.kill();
                        }
                  });
            };
      }, []);

      return (
            <Section id="section-4" className="bg-background-color flex flex-col items-center justify-center py-20 sm:py-0 gap-12 xl:gap-8 min-h-[unset]">
                  <h1 id="section4-title" className="text-orange title w-5/6 text-center tracking-tighter">Crafted with care. <br /> Shared with love.</h1>
                  <p id="section4-text" className="text-text-color w-full md:w-4/6 text-center">We craft outstanding ice cream to fund global missions, passionately dedicated to sharing the Gospel with over 3 billion unreached people. Because genuine ice cream blesses others.</p>
                  <div id="section4-image" className="w-full"><img src={proposito} alt="imagem proposito" className='xl:translate-y-[-10%]' /></div>
            </Section>
      )
}

export default Section4
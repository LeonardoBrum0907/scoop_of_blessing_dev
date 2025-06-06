import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import Section from '../../SectionLayout';
import grafismo from "/assets/images/grafismo_01.png";
import kingsland from "/assets/images/logo_01.svg";
import kingslandInternational from "/assets/images/logo_02.svg";
import parceiros from "/assets/images/parceiros.png";


const Section2 = () => {
      const el = React.useRef();
      const tl = React.useRef();

      React.useLayoutEffect(() => {
            gsap.registerPlugin(useGSAP, ScrollTrigger);

            gsap.to('.left', {
                  x: 0,
                  opacity: 1,
                  scrollTrigger: {
                        trigger: '.animation',
                        start: "top bottom",
                        end: "80% 90%",
                        scrub: true,
                        // markers: true,
                  },
            })

            const ctx = gsap.context(() => {
                  tl.current = gsap.timeline({
                        scrollTrigger: {
                              trigger: ".animation-timeline",
                              scrub: true,
                              // markers: true,
                              start: "top bottom",
                              end: "80% 90%",
                        }
                  })
                        .fromTo("#animation-item-1", {
                              opacity: 0,
                              y: 160,
                        }, {
                              opacity: 1,
                              y: 0,
                        })
                        .fromTo("#animation-item-2", {
                              opacity: 0,
                              y: 160,
                        }, {
                              opacity: 1,
                              y: 0,
                        })
                  // .fromTo("#animation-item-3", {
                  //       opacity: 0,
                  //       x: 160,
                  // }, {
                  //       opacity: 1,
                  //       x: 0,
                  // })
            }, el)

            return () => {
                  gsap.killTweensOf('.animation-timeline');
            }
      }, [])

      return (
            <Section id="section-2" className="bg-blue-700 flex flex-col items-center justify-center gap-9 relative">
                  <div className="animation flex justify-center">
                        <img src={parceiros} alt="Parceiros" className="w-2/3 sm:w-80 left" />
                  </div>

                  <div ref={el} className="flex flex-col w-full justify-center sm:flex-row gap-10 sm:gap-20 text-white">
                        <div id="animation-item-1" className="animation-timeline flex items-center flex-col gap-8 ease-in-out duration-200 w-full sm:w-[50%]">
                              <img src={kingsland} alt="Kingsland" className="w-full shrink-0" />
                        </div>
                        <div id="animation-item-2" className="animation-timeline flex items-center flex-col gap-8 ease-in-out duration-200 w-full sm:w-[50%]">
                              <img
                                    src={kingslandInternational}
                                    alt="Kingsland international people groups"
                                    className="w-full shrink-0"
                              />
                        </div>
                  </div>

                  <p className="text-white">Ao se tornar parceiro do <b>Café com Prosa</b>, você investe no <b>fortalecimento da comunidade brasileira em Katy</b>, apoiando encontros mensais que promovem conexões, suporte emocional e a preservação das tradições culturais. Seu apoio proporciona visibilidade para sua marca, que será destacada em eventos, redes sociais e materiais promocionais, alcançando um público que valoriza empresas comprometidas com a comunidade. Além de patrocinar um evento, sua parceria contribui para o bem-estar da comunidade, promovendo a cultura brasileira e a inclusão em um ambiente internacional. <b>O Café com Prosa é um projeto solidário</b>, sem custos para os participantes, e o apoio dos parceiros é <b>essencial para sua continuidade e qualidade.</b> Ao apoiar este projeto, você fortalece uma rede de brasileiros que se apoia e cresce em um novo país, promovendo a integração, amizades e o desenvolvimento pessoal e comunitário.</p>

                  <img
                        src={grafismo}
                        className="hidden sm:block sm:absolute sm:left-[-8%] sm:bottom-[-4%]"
                  />
                  <img
                        src={grafismo}
                        className="hidden sm:block sm:absolute sm:top-[-17%] sm:right-[-3%]"
                  />
            </Section>
      )
}

export default Section2
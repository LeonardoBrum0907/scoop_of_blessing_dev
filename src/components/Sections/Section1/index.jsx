import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Section from '../../SectionLayout';
import imagem01 from "/assets/images/imagem_01.png";
import quemSomos from "/assets/images/quem_somos.png";
import cafeComProsa from "/assets/images/selo01.png";

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
      }, [])

      return (
            <>
                  <Section id="section-1" className="mt-[5rem]">
                        <div className="fade-in flex justify-center">
                              <img
                                    src={cafeComProsa}
                                    alt="café com prosa"
                                    className="w-full max-w-[900px]"
                              />
                        </div>

                        <div className="fade-in flex flex-col items-center sm:flex-row gap-8 sm:gap-16 mt-20">
                              <img src={quemSomos} alt="" className="w-[50%] sm:w-full" />

                              <p className="text-white">
                                    O <b>Café com Prosa</b> é um projeto criado para capturar a essência descontraída das reuniões brasileiras, onde as despedidas são difíceis e as conversas se estendem com afeto e histórias. Voltado para <b>brasileiros em Katy</b>, o evento oferece um espaço para reviver a prosa em português, saborear delícias como pão de queijo e cafezinho, e relembrar a calorosa cultura brasileira. Realizado todo primeiro sábado do mês, das 9h às 11h, o objetivo é criar um espaço para compartilhar vivências, inspirar e aprender com os desafios de viver fora do Brasil. À medida que o grupo cresce, serão oferecidas oportunidades para contar histórias de superação e discutir lições que possam ajudar outros brasileiros. O evento é apoiado pela Igreja Batista de Kingsland, que fornece espaço e estrutura, mas a participação nos cultos não é obrigatória. Todos são bem-vindos, independentemente de religião ou crença, desde que estejam abertos a fazer parte da comunidade.
                              </p>
                        </div>
                  </Section>
                  <img src={imagem01} alt="café com prosa" className="w-full" />
            </>
      )
}

export default Section1